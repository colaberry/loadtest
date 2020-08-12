import { check, group, sleep } from 'k6';
import http from 'k6/http';

const data = JSON.parse(open("./data.json"));

export default function() {

  let uniqueNumber = __VU * 1 + __ITER -1;
  let user = data.users[uniqueNumber];
  console.log(data.users[uniqueNumber].username);
  let server_stopped = false;
  let server_starting = false;
  let code_not_syncedup = false;

  group('v1 Refactored Jupyter Hub load testing', function() {

    
    group('login ', function() {
      let res = http.get('https://stgdsin100days.refactored.ai//hub/login');
      // Now, submit form setting/overriding some fields of the form
      res = res.submitForm({
        formSelector: 'form',
        fields: { 
          //username: "loatestuser1", password: "hdqeXHjrzCGABf97" },
          username: user.username, password: user.password },
        });
      check(res, { "login status is 200": (r) => r.status === 200 });
      if (res.body.includes('Your server is starting up')) {
        server_starting = true;
        sleep(30);
        server_starting = false;
      }
      if (res.body.includes('Server not running')) {
        console.log("Server is not running. Staring up server")
        server_stopped = true;
        sleep(30);
        let res2 = http.get("https://stgdsin100days.refactored.ai/hub/spawn/" + user.username + "?next=%2Fhub%2Fuser%2F" + user.username + "%2Fnotebooks%2Fdsin100days%2Fcontent%2F02-Python_for_Data_Scientists%2F03-Data_Structures_in_python%2F01-Basic_data_types_and_operators.ipynb");
        check(res2, { "Server started": (r) => r.status === 200 }
        );
        server_stopped = false;
      }
      if (res.body.includes('Server not running')) {
        console.log("Server is not running. Staring up server")
        server_stopped = true;
        sleep(30);
        let res2 = http.get("https://stgdsin100days.refactored.ai/hub/spawn/" + user.username + "?next=%2Fhub%2Fuser%2F" + user.username + "%2Fnotebooks%2Fdsin100days%2Fcontent%2F02-Python_for_Data_Scientists%2F03-Data_Structures_in_python%2F01-Basic_data_types_and_operators.ipynb");
        check(res2, { "Server started": (r) => r.status === 200 }
        );
        server_stopped = false;
      }
    });

    group('Jupyter hub heart-beat', function() {
      let res = http.get("https://stgdsin100days.refactored.ai/user/" + user.username + "/notebooks/dsin100days/content/02-Python_for_Data_Scientists/03-Data_Structures_in_python/01-Basic_data_types_and_operators.ipynb");
      check(res, { " Notebooks Availability...done ": (r) => r.body.includes('data-notebook-name="01-Basic_data_types_and_operators.ipynb"') });
      if (! res.body.includes('data-notebook-name="01-Basic_data_types_and_operators.ipynb"')) {
        console.log("Notebook not synced. Syncing.. ")
        code_not_syncedup = true;
        let res2 = http.get("https://stgdsin100days.refactored.ai/user/" + user.username + "/git-pull?repo=https%3A%2F%2Fgithub.com%2Fcolaberry%2Fdsin100days&branch=master&subPath=content%2F02-Python_for_Data_Scientists%2F03-Data_Structures_in_python%2F01-Basic_data_types_and_operators.ipynb&redirects=1");
        sleep(180);
        let res3 = http.get("https://stgdsin100days.refactored.ai/user/" + user.username + "/git-pull/api?repo=https%3A%2F%2Fgithub.com%2Fcolaberry%2Fdsin100days&branch=master");
        //let res3 = http.get("https://stgdsin100days.refactored.ai/user/" + user.username + "/notebooks/dsin100days/content/02-Python_for_Data_Scientists/03-Data_Structures_in_python/01-Basic_data_types_and_operators.ipynb");
        check(res3, { "heart-beat up..":  (r) => r.body.includes('data: {"phase": "finished"}')});
        code_not_syncedup = false;
      }
    });


    group('get 01-Basic_data_types notebook', function() {
      while (code_not_syncedup) {
        sleep(15);
      }
      let res = http.get("https://stgdsin100days.refactored.ai/user/" + user.username + "/notebooks/dsin100days/content/02-Python_for_Data_Scientists/03-Data_Structures_in_python/01-Basic_data_types_and_operators.ipynb");
      check(res, { "Notebook loaded": (r) => r.status === 200 ,
      "01-Basic_data_types.. done": (r) => r.body.includes('data-notebook-name="01-Basic_data_types_and_operators.ipynb"')}
      );
    });
    
    group('get 02-Lists_and_Nested_Lists notebook', function() {
      while (code_not_syncedup) {
        sleep(15);
      }
      let res = http.get("https://stgdsin100days.refactored.ai/user/" + user.username + "/notebooks/dsin100days/content/02-Python_for_Data_Scientists/03-Data_Structures_in_python/02-Lists_and_Nested_Lists.ipynb");
      check(res, { "Notebook loaded": (r) => r.status === 200 ,
      "02-Lists_and_Nested_Lists.. done": (r) => r.body.includes('data-notebook-name="02-Lists_and_Nested_Lists.ipynb"')}
      );
    });

    group('get dealing-with-strings-and-dates notebook', function() {
      while (code_not_syncedup) {
        sleep(15);
      }
      let res = http.get("https://stgdsin100days.refactored.ai/user/" + user.username + "/notebooks/dsin100days/content/02-Python_for_Data_Scientists/04-Dealing_with_strings_and_dates/dealing-with-strings-and-dates.ipynb");
      check(res, { "Notebook loaded": (r) => r.status === 200 ,
      "dealing-with-strings-and-dates.. done": (r) => r.body.includes('data-notebook-name="dealing-with-strings-and-dates.ipynb"')}
      );
    });


  });
  sleep(1);
}