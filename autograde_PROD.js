import { check, group, sleep } from 'k6';
import http from 'k6/http';

const data = JSON.parse(open("./data_prod.json"));
//let ipynbFile = open('/home/mani/Documents/Refactored.AI/loadtest/Lab-data-structures-in-python-guided.ipynb', 'b');

let ipynbFile = open('./Lab-data-structures-in-python-guided.ipynb', 'b');
var files=[], fnames=[];
files.push(ipynbFile);    
//console.log(files)

export default function() {

  let uniqueNumber = __VU * 1 + __ITER -1  ;
  let user = data.users[uniqueNumber];
  console.log(data.users[uniqueNumber].username);
  let server_stopped = false;
  let server_starting = false;
  let code_not_syncedup = true;
  let params = {
    timeout: 240000
  };

  group('v1 Auto Grade load testing', function() {

    
    group('heart beat ', function() {
      const url = 'http://autograde.refactored.ai/';
      //const url = 'http://0.0.0.0:5000/';
      let data = { 
        username: user.username, password: user.password };
      let res = http.get(url, data, params);
      //console.log(res.body);
      check(res, { "Autograde home page successful..":  (r) => r.body.includes('"hello": "world"')});
    });

    group('submit lab and reslt', function() {
        var num = Math.floor(Math.random() * (3001 - 1001 + 1) + 1001); 
        //var binFile = 'Lab-data-structures-in-python-guided.ipynb';
        var data = {
          'user': user.username,
          file: http.file(ipynbFile, 'rnd' + num + '_Lab-data-structures-in-python-guided.ipynb'),
        };
        var res = http.post('http://autograde.refactored.ai/uploader', data);
        //var res = http.post('http://0.0.0.0:5000/uploader', data);
        //check(res, { "Autograde Submit successful..":  (r) => r.body.includes('WAIT')});
        check(res, { "Autograde Submit successful..":  (r) => r.json(['answerid']) != '-1'});
        console.log("AnswerID ::" + res.json(['answerid']))
        var answer_id = res.json(['answerid']);
        if (res.json(['answerid']) == '-1'){
            console.log(res.body);
            return -1;
      }
        var url2 = 'http://autograde.refactored.ai/get_result?answer_id=' + res.json(['answerid']);
        //var url2 = 'http://0.0.0.0:5000/get_result?answer_id=' + res.json(['answerid']);
        console.log(url2)
        sleep(5);      
        var count = 0;
        while (true) {
          let res2 = http.get(url2, data);
          count = count + 1;
          if (answer_id != -1 && res2.body.includes('WAIT') && count < 10) {
            console.log(res2.body)
            sleep(5);
            continue;      
          } else {
            check(res2, { "Autograde result success..":  (r) => (r.body.includes('PASS') || r.body.includes('FAIL'))});
            console.log(res2.body)
            break;
          }
  
        }

    });


  });
  sleep(1);
}