import { group, sleep, check } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
    maxRedirects: 0,
};

export default function() {

	group("page_1 - https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb", function() {
		let req, res;
		req = "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb";
		res = http.get(req);
		check(res, {
			//"status is 200": (r) => r.status === 200
			"Numpy 2 done!": (r) => r.body.includes('data-notebook-name="numpy_2.ipynb"')
		  });
			
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*10+10));
	});

}
