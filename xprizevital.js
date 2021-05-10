import { check, group, sleep } from 'k6';
import http from 'k6/http';

export let options = {
  max_vus: 300,
  vus: 100,
  stages: [
    { duration: "60s", target: 10 },
    { duration: "4m", target: 100 },
    { duration: "30s", target: 0 }
  ],
  thresholds: {
    "RTT": ["avg<500"]
  }
}

//URLs

let url_vital_survey = "https://survey.refactored.ai/user-feedback/257/vitalreskilling/";
let url_vital1 = "https://refactored.ai/course/CRCST-Sterilization-processing-course/"
let url_vital2 = "https://refactored.ai/learn/CRCST-Sterilization-processing-course/Chapter-1---Introduction-to-Central-Service/"
let url_vital3 = "https://refactored.ai/learn/CRCST-Sterilization-processing-course/Chapter-2---Medical-Terminology-for-Central-Service-Technicians/"
let url_vital4 = "https://refactored.ai/learn/CRCST-Sterilization-processing-course/Chapter-3---Anatomy-for-Central-Service-Technicians/"
let url_vital5 = "https://refactored.ai/learn/CRCST-Sterilization-processing-course/Chapter-4---Microbiology-for-Central-Service-Technicians/"

export default function() {
  group('v1 Refactored load testing', function() {
    // group('heart-beat', function() {
    //   let res = http.get("https://refactored.ai");
    //   check(res, { "status is 200": (r) => r.status === 200 });
    // });

    // group('course Vital Reskilling - Home ', function() {
    //   let res = http.get(url_vital1);
    //   check(res, {
    //     "status is 200": (r) => r.status === 200,
    //     "Vital Reskilling Home .. done": (r) => r.body.includes('CRCST Sterilization processing course')
    //   });
    // })

    group('course Vital Reskilling - Chapter1 ', function() {
      let res = http.get(url_vital2);
      check(res, {
        "status is 200": (r) => r.status === 200
        //,
        //"Vital Reskilling Chapter1 .. done": (r) => r.body.includes('<h1 class="main_heading">Chapter 1 - Introduction to Central Service</h1>')
      });
    })

    // group('course Vital Reskilling - Chapter2 ', function() {
    //   let res = http.get(url_vital3);
    //   check(res, {
    //     "status is 200": (r) => r.status === 200,
    //     "Vital Reskilling Chapter2 .. done": (r) => r.body.includes('<h1 class="main_heading">Chapter 2 - Medical Terminology for Central Service Technicians</h1>')
    //   });
    // })

    // group('course Vital Reskilling - Chapter3 ', function() {
    //   let res = http.get(url_vital4);
    //   check(res, {
    //     "status is 200": (r) => r.status === 200,
    //     "Vital Reskilling Chapter3 .. done": (r) => r.body.includes('<h1 class="main_heading">Chapter 3 - Anatomy for Central Service Technicians</h1>')
    //   });
    // })

    // group('course Vital Reskilling - Chapter4 ', function() {
    //   let res = http.get(url_vital5);
    //   check(res, {
    //     "status is 200": (r) => r.status === 200,
    //     "Vital Reskilling Chapter4 .. done": (r) => r.body.includes('<h1 class="main_heading">Chapter 4 - Microbiology for Central Service Technicians</h1>')
    //   });
    // })

    // group('course aws deep racer Pre-Workshop-  Create your AWS account ', function() {
    //   let res = http.get(url_create_aws);
    //   check(res, {
    //     "status is 200": (r) => r.status === 200,
    //     "Create AWS account.. done": (r) => r.body.includes('<h1 class="main_heading">Create your AWS account</h1>')
    //   });
    // });


  });
  sleep(1);
}