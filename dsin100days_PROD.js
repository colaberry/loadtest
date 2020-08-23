import { check, group, sleep } from 'k6';
import http from 'k6/http';

const data = JSON.parse(open("./data_prod.json"));

export default function() {

  let uniqueNumber = __VU * 1 + __ITER -1 + 300 ;
  let user = data.users[uniqueNumber];
  console.log(data.users[uniqueNumber].username);
  let server_stopped = false;
  let server_starting = false;
  let code_not_syncedup = true;
  let params = {
    timeout: 240000
  };

  group('v1 Refactored Jupyter Hub load testing', function() {

    
    group('login ', function() {
      const url = 'https://dsin100days.refactored.ai//hub/login';
      let data = { 
        username: user.username, password: user.password };
      let res = http.post(url, data, params);
      //console.log(res.body);
      check(res, { "Login successful..":  (r) => r.body.includes('<button id="logout" class="btn btn-sm navbar-btn">Logout</button>')});
      if (res.body.includes('Your server is starting up')) {
        check(res, { "Server Starting up..":  (r) => r.body.includes('Your server is starting up')});
        console.log(user.username + "Server Starting up")
        server_starting = true;
        sleep(60);
        let res2 = http.get("https://dsin100days.refactored.ai/user/" + user.username + "/notebooks/dsin100days/content/02-Python_for_Data_Scientists/03-Data_Structures_in_python/01-Basic_data_types_and_operators.ipynb", params);
        check(res2, { " Server started...done ": (r) => r.body.includes('') });
 
        server_starting = false;
      }
      if (res.body.includes('Server not running')) {
        check(res, { "Server not running..":  (r) => r.body.includes('Server not running')});
        console.log(user.username + "Server is not running. Staring up server")
        server_stopped = true;
        sleep(120);
        let res2 = http.get("https://dsin100days.refactored.ai/hub/spawn/" + user.username + "?next=%2Fhub%2Fuser%2F" + user.username + "%2Fnotebooks%2Fdsin100days%2Fcontent%2F02-Python_for_Data_Scientists%2F03-Data_Structures_in_python%2F01-Basic_data_types_and_operators.ipynb", params);
        check(res2, { "Server started": (r) => r.status === 200 }
        );
        server_stopped = false;
      }
    });

    group('Jupyter hub heart-beat', function() {
      let res = http.get("https://dsin100days.refactored.ai/user/" + user.username + "/notebooks/dsin100days/content/02-Python_for_Data_Scientists/03-Data_Structures_in_python/01-Basic_data_types_and_operators.ipynb", params);
      check(res, { " Notebooks Availability...done ": (r) => r.body.includes('data-notebook-name="01-Basic_data_types_and_operators.ipynb"') });
      if (! res.body.includes('data-notebook-name="01-Basic_data_types_and_operators.ipynb"')) {
        console.log(user.username + " Notebook not synced. Syncing.. ")
        code_not_syncedup = true;
        let res2 = http.get("https://dsin100days.refactored.ai/user/" + user.username + "/git-pull?repo=https%3A%2F%2Fgithub.com%2Fcolaberry%2Fdsin100days&branch=master&subPath=content%2F02-Python_for_Data_Scientists%2F03-Data_Structures_in_python%2F01-Basic_data_types_and_operators.ipynb&redirects=1", params);
          sleep(180);
          let res3 = http.get("https://dsin100days.refactored.ai/user/" + user.username + "/git-pull/api?repo=https%3A%2F%2Fgithub.com%2Fcolaberry%2Fdsin100days&branch=master", params);
          //let res3 = http.get("https://stgdsin100days.refactored.ai/user/" + user.username + "/notebooks/dsin100days/content/02-Python_for_Data_Scientists/03-Data_Structures_in_python/01-Basic_data_types_and_operators.ipynb");
          check(res3, { "heart-beat up..":  (r) => r.body.includes('data: {"phase": "finished"}')});
          if (res3.body.includes('data: {"phase": "finished"}')) {
              code_not_syncedup = false;
          } else {
            code_not_syncedup = false;
          }
        } else {
          code_not_syncedup = false;
        }
    });


    group('get 01-Basic_data_types notebook', function() {
      while (code_not_syncedup) {
        sleep(15);
      }
      console.log(user.username + ' Reading 1st notebook')
      let res = http.get("https://dsin100days.refactored.ai/user/" + user.username + "/notebooks/dsin100days/content/02-Python_for_Data_Scientists/03-Data_Structures_in_python/01-Basic_data_types_and_operators.ipynb");
      check(res, { "Notebook loaded": (r) => r.status === 200 ,
      "01-Basic_data_types.. done": (r) => r.body.includes('data-notebook-name="01-Basic_data_types_and_operators.ipynb"')}
      );
    });
    
    group('get 02-Lists_and_Nested_Lists notebook', function() {
      while (code_not_syncedup) {
        sleep(15);
      }
      let res = http.get("https://dsin100days.refactored.ai/user/" + user.username + "/notebooks/dsin100days/content/02-Python_for_Data_Scientists/03-Data_Structures_in_python/02-Lists_and_Nested_Lists.ipynb");
      check(res, { "Notebook loaded": (r) => r.status === 200 ,
      "02-Lists_and_Nested_Lists.. done": (r) => r.body.includes('data-notebook-name="02-Lists_and_Nested_Lists.ipynb"')}
      );
    });

    group('get dealing-with-strings-and-dates notebook', function() {
      while (code_not_syncedup) {
        sleep(15);
      }
      let res = http.get("https://dsin100days.refactored.ai/user/" + user.username + "/notebooks/dsin100days/content/02-Python_for_Data_Scientists/04-Dealing_with_strings_and_dates/dealing-with-strings-and-dates.ipynb");
      check(res, { "Notebook loaded": (r) => r.status === 200 ,
      "dealing-with-strings-and-dates.. done": (r) => r.body.includes('data-notebook-name="dealing-with-strings-and-dates.ipynb"')}
      );
    });


  });
  sleep(1);
}