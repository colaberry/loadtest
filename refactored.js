import { check, group, sleep } from 'k6';
import http from 'k6/http';

export let options = {
  max_vus: 300,
  vus: 100,
  stages: [
    { duration: "30s", target: 10 },
    { duration: "4m", target: 100 },
    { duration: "30s", target: 0 }
  ],
  thresholds: {
    "RTT": ["avg<500"]
  }
}

//URLs

let url_deepracer_home = "https://refactored.ai/course/aws-deepracer/";
let url_create_aws = "https://refactored.ai/learn/aws-deepracer/da3be7bddded41c0a293c5700f9e717f/";
let url_intro_autonmous = "https://refactored.ai/learn/aws-deepracer/756eac3fd24d43a6bab0ceba27836f25/";
let url_intro_ml = "https://refactored.ai/learn/aws-deepracer/4509de3274954a5a853244aac565c667/";
let url_basics_rl = "https://refactored.ai/learn/aws-deepracer/297da23ee7b1436380ee0f061d8960b4/";
let url_model_init = "https://refactored.ai/learn/aws-deepracer/fd2c7bf0670e4b839a6eafe944c27e1d/";
let url_reward_function = "https://refactored.ai/learn/aws-deepracer/0b81ef276d424d3082c567be41ea2582/";

export default function() {
  group('v1 Refactored load testing', function() {
    group('heart-beat', function() {
      let res = http.get("https://refactored.ai");
      check(res, { "status is 200": (r) => r.status === 200 });
    });

    group('course aws deep racer - Home ', function() {
      let res = http.get(url_deepracer_home);
      check(res, {
        "status is 200": (r) => r.status === 200,
        "AWS Deepracer Home .. done": (r) => r.body.includes('<h3>AWS DeepRacer</h3>')
      });
    })

    group('course aws deep racer Pre-Workshop-  Create your AWS account ', function() {
      let res = http.get(url_create_aws);
      check(res, {
        "status is 200": (r) => r.status === 200,
        "Create AWS account.. done": (r) => r.body.includes('<h1 class="main_heading">Create your AWS account</h1>')
      });
    });

    group('course aws deep racer Pre-Workshop -  Introduction to Autonomous Vehicle ', function() {
      let res = http.get(url_intro_autonmous);

      check(res, {
        "status is 200": (r) => r.status === 200,
        "Introduction to Autonomous Vehicle.. done": (r) => r.body.includes('<h1 class="main_heading">Introduction to Autonomous Vehicles</h1>')
      });
    });

    group('course aws deep racer Pre-Workshop -  Introduction to Machine learning ', function() {
      let res = http.get(url_intro_ml);
      check(res, {
        "status is 200": (r) => r.status === 200,
        "Introduction to Machine learning.. done": (r) => r.body.includes('<h1 class="main_heading">Introduction to Machine learning</h1>')
      });
    });

    group('course aws deep racer Workshop-  Basics of Reinforcement Learning ', function() {
      let res = http.get(url_basics_rl);
      check(res, {
        "status is 200": (r) => r.status === 200,
        "Basics of Reinforcement Learning.. done": (r) => r.body.includes('<h1 class="main_heading">Basics of Reinforcement Learning</h1>')
      });
    });

    group('course aws deep racer Workshop-  AWS Deepracer Model Initilization ', function() {
      let res = http.get(url_model_init);
      check(res, {
        "status is 200": (r) => r.status === 200,
        "AWS Deepracer Model Initilization.. done": (r) => r.body.includes('<h1 class="main_heading">AWS Deepracer Model Initilization</h1>')
      });
    });


    group('course aws deep racer post-workshop -  Reward Function ', function() {
      let res = http.get(url_reward_function);
      check(res, {
        "status is 200": (r) => r.status === 200,
        "Reward Function.. done": (r) => r.body.includes('<h1 class="main_heading">Reward Function</h1>')
      });
    });
    
    // group('login', function() {
    //   let res = http.get("https://httpbin.org/bearer", {
    //     headers: { "Authorization": "Bearer da39a3ee5e6b4b0d3255bfef95601890afd80709" }
    //   });
    //   check(res, {
    //     "status is 200": (r) => r.status === 200,
    //     "is authenticated": (r) => r.json()["authenticated"] === true
    //   });
    // });

  });
  sleep(1);
}