import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
    maxRedirects: 0,
};

export default function() {

	group("page_1 - https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"cache-control": "max-age=0",
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-dest": "document",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-fetch-site": "none",
					"sec-fetch-mode": "navigate",
					"sec-fetch-user": "?1",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
					"if-none-match": "W/\"b3252501410d14b5821c77877548eae12b52c2b4\""
				}
			}
		}];
		res = http.batch(req);
		sleep(1.29);
		req = [{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/components/MathJax/MathJax.js?config=TeX-AMS-MML_HTMLorMML-full,Safe&delayStartupUntil=configured",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"sec-fetch-dest": "script",
					"if-modified-since": "Wed, 08 Apr 2020 19:28:25 GMT",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/components/es6-promise/promise.min.js?v=f004a16cb856e0ff11781d01ec5ca8fe",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Sec-Fetch-Dest": "script"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/components/react/react.production.min.js?v=34f96ffc962a7deecc83037ccb582b58",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Sec-Fetch-Dest": "script"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/components/react/react-dom.production.min.js?v=b14d91fb641317cda38dbc9dbf985ab4",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Sec-Fetch-Dest": "script"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/components/create-react-class/index.js?v=94feb9971ce6d26211729abc43f96cd2",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Sec-Fetch-Dest": "script"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/components/requirejs/require.js?v=951f856e81496aaeec2e71a1c2c0d51f",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Sec-Fetch-Dest": "script"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/hub/logo",
			"params": {
				"headers": {
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Sec-Fetch-Dest": "image"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/components/text-encoding/lib/encoding.js?v=d5bb0fc9ffeff7d98a69bb83daa51052",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Sec-Fetch-Dest": "script"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/notebook/js/main.min.js?v=41ffc97d72473b38367b6e968de1ab74",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Sec-Fetch-Dest": "script"
				}
			}
		}];
		res = http.batch(req);
		sleep(1.53);
		req = [{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/components/MathJax/config/TeX-AMS-MML_HTMLorMML-full.js?V=2.7.8",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-dest": "script",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
					"if-modified-since": "Wed, 08 Apr 2020 19:28:25 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/components/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0",
			"params": {
				"headers": {
					"Referer": "https://dsin100days.refactored.ai/user/manirv/static/style/style.min.css?v=e91a43337d7c294cc9fab2938fa723b3",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Dest": "font",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/services/contents.js?v=20200807092518",
			"params": {
				"headers": {
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Sec-Fetch-Dest": "script"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/api/config/notebook?_=1596792351621",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"accept": "application/json, text/javascript, */*; q=0.01",
					"sec-fetch-dest": "empty",
					"x-requested-with": "XMLHttpRequest",
					"x-xsrftoken": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/api/config/common?_=1596792351622",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"accept": "application/json, text/javascript, */*; q=0.01",
					"sec-fetch-dest": "empty",
					"x-requested-with": "XMLHttpRequest",
					"x-xsrftoken": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/api/kernelspecs",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"accept": "*/*",
					"sec-fetch-dest": "empty",
					"x-requested-with": "XMLHttpRequest",
					"x-xsrftoken": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
					"if-none-match": "W/\"f01eff26b7a247a4265b9b1478323c9feb437e8a\""
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/api/contents/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb?type=notebook&_=1596792351623",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"accept": "application/json, text/javascript, */*; q=0.01",
					"sec-fetch-dest": "empty",
					"x-requested-with": "XMLHttpRequest",
					"x-xsrftoken": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/custom/custom.js?v=20200807092518",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-dest": "script",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
					"if-modified-since": "Sun, 12 Apr 2020 10:30:17 GMT"
				}
			}
		}];
		res = http.batch(req);
		sleep(0.80);
		req = [{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/components/MathJax/config/Safe.js?V=2.7.8",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-dest": "script",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
					"if-modified-since": "Wed, 08 Apr 2020 19:28:25 GMT"
				}
			}
		}];
		res = http.batch(req);
		sleep(1.43);
		req = [{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/images/numpy_1-zeroes_ones_eye.png",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-dest": "image",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://dsin100days.refactored.ai/user/manirv/api/sessions",
			"body": "{\"path\":\"dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb\",\"type\":\"notebook\",\"name\":\"\",\"kernel\":{\"id\":null,\"name\":\"python3\"}}",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"accept": "application/json, text/javascript, */*; q=0.01",
					"sec-fetch-dest": "empty",
					"x-requested-with": "XMLHttpRequest",
					"x-xsrftoken": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/json",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/kernelspecs/python3/logo-64x64.png",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Sec-Fetch-Dest": "image"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/api/contents/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb/checkpoints?_=1596792351624",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"accept": "application/json, text/javascript, */*; q=0.01",
					"sec-fetch-dest": "empty",
					"x-requested-with": "XMLHttpRequest",
					"x-xsrftoken": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js",
			"params": {
				"headers": {
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Sec-Fetch-Dest": "script"
				}
			}
		},{
			"method": "get",
			"url": "https://log.refactored.ai/log/ping?username=manirv&url=https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Sec-Fetch-Dest": "empty",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/notebookvisit",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb"
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/notebookload",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"load_time": "3026"
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://s3.amazonaws.com/refactored/images/refactored_logo.svg",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Sec-Fetch-Dest": "image"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/nbextensions/bqplot/extension.js?v=20200807092518",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-dest": "script",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
					"if-modified-since": "Mon, 13 Apr 2020 11:39:36 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/nbextensions/plotlywidget/extension.js?v=20200807092518",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-dest": "script",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
					"if-modified-since": "Mon, 13 Apr 2020 11:39:40 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/nbextensions/jupyter-js-widgets/extension.js?v=20200807092518",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-dest": "script",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
					"if-modified-since": "Mon, 13 Apr 2020 11:39:47 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/components/MathJax/extensions/MathML/content-mathml.js?V=2.7.8",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-dest": "script",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
					"if-modified-since": "Wed, 08 Apr 2020 19:28:25 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/components/MathJax/jax/output/HTML-CSS/fonts/STIX-Web/fontdata.js?V=2.7.8",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-dest": "script",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
					"if-modified-since": "Wed, 08 Apr 2020 19:28:25 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://api-js.mixpanel.com/decide/?verbose=1&version=1&lib=web&token=6a041bcb6c0e6e5252f670c8f5f5db9e&ip=1&_=1596792354244",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-dest": "empty",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://api-js.mixpanel.com/decide/?verbose=1&version=3&lib=web&token=6a041bcb6c0e6e5252f670c8f5f5db9e&distinct_id=manirv&ip=1&_=1596792354246",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-dest": "empty",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792354252",
			"body": {
				"data": "eyJldmVudCI6ICJub3RlYm9vayBvcGVuZWQiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiTGludXgiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpL3VzZXIvbWFuaXJ2L25vdGVib29rcy9kc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogODAsIiRzY3JlZW5faGVpZ2h0IjogMTA4MCwiJHNjcmVlbl93aWR0aCI6IDE5MjAsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi4zOC4wIiwiJGluc2VydF9pZCI6ICI2MWd3ZXFiZmU4M3BnaHA4IiwidGltZSI6IDE1OTY3OTIzNTQuMjUxLCJkaXN0aW5jdF9pZCI6ICJtYW5pcnYiLCIkZGV2aWNlX2lkIjogIjE3M2M4M2Q3OTcwNmRhLTAyNmU5YTE4MTQ5ZjEtMzE3ZTBjNWUtMWZhNDAwLTE3M2M4M2Q3OTcxYTU2IiwiJHVzZXJfaWQiOiAibWFuaXJ2IiwiJGluaXRpYWxfcmVmZXJyZXIiOiAiaHR0cHM6Ly9kc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpL2h1Yi9zcGF3bi1wZW5kaW5nL21hbmlydj9uZXh0PSUyRmh1YiUyRnVzZXIlMkZtYW5pcnYlMkZub3RlYm9va3MlMkZkc2luMTAwZGF5cyUyRmNvbnRlbnQlMkYwMi1QeXRob25fZm9yX0RhdGFfU2NpZW50aXN0cyUyRjA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5JTJGbnVtcHlfMi5pcHluYiIsIiRpbml0aWFsX3JlZmVycmluZ19kb21haW4iOiAiZHNpbjEwMGRheXMucmVmYWN0b3JlZC5haSIsInBhdGgiOiAiZHNpbjEwMGRheXMvY29udGVudC8wMi1QeXRob25fZm9yX0RhdGFfU2NpZW50aXN0cy8wOC1Db21wdXRhdGlvbnNfd2l0aF9OdW1weS9udW1weV8yLmlweW5iIiwidG9rZW4iOiAiNmEwNDFiY2I2YzBlNmU1MjUyZjY3MGM4ZjVmNWRiOWUifX0="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/components/MathJax/extensions/Safe.js?V=2.7.8",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-dest": "script",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
					"if-modified-since": "Wed, 08 Apr 2020 19:28:25 GMT"
				}
			}
		}];
		res = http.batch(req);
		sleep(1.43);
		req = [{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/files/dsin100days/images/numpy_1-zeroes_ones_eye.png",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-dest": "image",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
					"if-modified-since": "Thu, 29 Aug 2019 12:26:36 GMT"
				}
			}
		}];
		res = http.batch(req);
		sleep(1.41);
		req = [{
			"method": "get",
			"url": "wss://dsin100days.refactored.ai/user/manirv/api/kernels/220810df-930a-435a-adb5-dec53bad2faf/channels?session_id=f8d3793c2f1f41f78ce450d0555b5c5f",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"Pragma": "no-cache",
					"Origin": "https://dsin100days.refactored.ai",
					"Accept-Encoding": "gzip, deflate, br",
					"Host": "dsin100days.refactored.ai",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
					"Sec-WebSocket-Key": "IDS5hhZ+rfo9gFAZgLKTVw==",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Upgrade": "websocket",
					"Sec-WebSocket-Extensions": "permessage-deflate; client_max_window_bits",
					"Cache-Control": "no-cache",
					"Connection": "Upgrade",
					"Sec-WebSocket-Version": "13"
				}
			}
		},{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/static/base/images/favicon-busy-1.ico",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-dest": "image",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
					"if-modified-since": "Sun, 12 Apr 2020 10:30:17 GMT"
				}
			}
		}];
		res = http.batch(req);
		sleep(26.24);
		req = [{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792383795",
			"body": {
				"data": "eyJldmVudCI6ICJjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogImxnZXZ1cDZpMHhvMTUwZmIiLCJ0aW1lIjogMTU5Njc5MjM4My43OTIsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJjZWxsX2lkIjogIjAzYWM3ZTg4ZmVjYTQ3NzI4YmY3MmJjOTRlMjU2MTBkIiwidG9rZW4iOiAiNmEwNDFiY2I2YzBlNmU1MjUyZjY3MGM4ZjVmNWRiOWUifX0="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecution",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "03ac7e88feca47728bf72bc94e25610d"
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792384224",
			"body": {
				"data": "eyJldmVudCI6ICJmaW5pc2hlZCBjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogIjA0OGdjZGFmcW82dnFkZWgiLCJ0aW1lIjogMTU5Njc5MjM4NC4yMjMsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJjZWxsX2lkIjogIjAzYWM3ZTg4ZmVjYTQ3NzI4YmY3MmJjOTRlMjU2MTBkIiwic3RhdHVzIjogInN1Y2Nlc3MiLCJ0b2tlbiI6ICI2YTA0MWJjYjZjMGU2ZTUyNTJmNjcwYzhmNWY1ZGI5ZSJ9fQ=="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecutionresult",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "03ac7e88feca47728bf72bc94e25610d",
				"result": "[object Object]",
				"is_error": "false"
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(63.87);
		req = [{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792448091",
			"body": {
				"data": "eyJldmVudCI6ICJjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogInVxcnZrbXllYnRob2c0MGUiLCJ0aW1lIjogMTU5Njc5MjQ0OC4wODksImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJjZWxsX2lkIjogIjAzYWM3ZTg4ZmVjYTQ3NzI4YmY3MmJjOTRlMjU2MTBkIiwidG9rZW4iOiAiNmEwNDFiY2I2YzBlNmU1MjUyZjY3MGM4ZjVmNWRiOWUifX0="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecution",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "03ac7e88feca47728bf72bc94e25610d"
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792448389",
			"body": {
				"data": "eyJldmVudCI6ICJmaW5pc2hlZCBjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogIm90OWQ5dGtodDUxNXBzeGQiLCJ0aW1lIjogMTU5Njc5MjQ0OC4zODYsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJjZWxsX2lkIjogIjAzYWM3ZTg4ZmVjYTQ3NzI4YmY3MmJjOTRlMjU2MTBkIiwic3RhdHVzIjogInN1Y2Nlc3MiLCJ0b2tlbiI6ICI2YTA0MWJjYjZjMGU2ZTUyNTJmNjcwYzhmNWY1ZGI5ZSJ9fQ=="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecutionresult",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "03ac7e88feca47728bf72bc94e25610d",
				"result": "[object Object]",
				"is_error": "false"
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(25.73);
		req = [{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/api/contents/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb?content=0&_=1596792351625",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"accept": "application/json, text/javascript, */*; q=0.01",
					"sec-fetch-dest": "empty",
					"x-requested-with": "XMLHttpRequest",
					"x-xsrftoken": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "put",
			"url": "https://dsin100days.refactored.ai/user/manirv/api/contents/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
			"body": "{\"type\":\"notebook\",\"content\":{\"cells\":[{\"metadata\":{\"cell_id\":\"bd62990894404ad3835d59ab2c64006d\",\"tags\":[\"s1\",\"content\",\"l1\"]},\"cell_type\":\"markdown\",\"source\":\"# Numpy II\\n\\n## 1. NumPy Array Operations\\n \\n<br>\\nIn this lesson we shall study various operations on numpy arrays. \\n\\n#### 1.1 Addition of two arrays\\n\\nTo add another array of the same dimension use\\n```python\\nC = np.add(A, B)      OR     C = A + B\\n```\\n\\n#### 1.2 Subtraction of two arrays\\n\\nTo subtract an array from another array use \\n```python\\nD = np.subtract(A,B)  OR     D = A - B\\n```\\n\\n#### 1.3 Multiplication\\n\\nUsing \\\\_\\\\_np.multiply\\\\_\\\\_ (or the \\\\_\\\\_\\\\* symbol\\\\_\\\\_) you can\\n\\n<b>1. multiply a constant with the elements of the array</b>\\n```python\\nK = 10\\nY = np.multiply(K,[1, 2, 3, 4, 5])   OR     Y = K * np.array([1, 2, 3, 4, 5])\\n\\n# Output\\n>>> array([10, 20, 30, 40, 50])\\n```\\n<b>2. multiply an array with another array, performs element-wise multiplication (only if both arrays are of equal shape)</b>\\n``` python\\nA = np.array([1,2,3])\\nB = np.array([4,5,6])\\nC = np.multiply(A,B)                 OR     C = A * B\\n\\n# Output\\n>>> array([ 4, 10, 18])\\n```\\n\\nUsing \\\\_\\\\_np.dot\\\\_\\\\_ you can perform\\n\\n<b>3. dot product of two arrays, calculates sum of product of elements (only if both arrays are of equal shape)</b>\\n```python\\nA = np.array([1,2,3])\\nB = np.array([4,5,6])\\nC = np.dot(A, B)\\n\\n# Output\\n>>> 32\\n```\\n\\nUsing \\\\_\\\\_np.matmul\\\\_\\\\_ you can perform\\n\\n<b>4. matrix multiplication (only if number of columns in the 1st one equals the number of rows in the 2nd one)</b>\\n``` python\\nA = [[1, 0], [0, 1]]\\nB = [[4, 1], [2, 2]]\\nC = np.matmul(A, B)\\n\\n# Output\\n>>> array([[4, 1],\\n       [2, 2]])\\n```\\n\\n\\n### Exercise:\\n\\nGiven two arrays:\\n```python\\nA = [1, 2, 3, 4]\\nB = [2, 3, 4, 5]\\n```\\n\\n- Initilize the above arrays as variables A & B.\\n- Perform a dot product of the two vectors and assign it to the variable C.\\n- Print C.\"},{\"metadata\":{\"ExecuteTime\":{\"end_time\":\"2018-08-26T16:37:41.542334Z\",\"start_time\":\"2018-08-26T16:37:41.111929Z\"},\"cell_id\":\"03ac7e88feca47728bf72bc94e25610d\",\"tags\":[\"s1\",\"ce\",\"l1\"],\"trusted\":true},\"cell_type\":\"code\",\"source\":\"import numpy as np\\nA = np.array([1, 2, 3, 4])\\nB = np.array([2, 3, 4, 5])\\n\\nC=np.dot(A,B)\\nC\",\"execution_count\":2,\"outputs\":[{\"output_type\":\"execute_result\",\"execution_count\":2,\"data\":{\"text/plain\":\"40\"},\"metadata\":{}}]},{\"metadata\":{\"cell_id\":\"63b7b82b5f22497ebb96393ca6e3d9fc\",\"collapsed\":true,\"hide_input\":false,\"tags\":[\"s1\",\"l1\",\"ans\"]},\"cell_type\":\"markdown\",\"source\":\"### Solution code\\n\\n```python\\nA = np.array([1, 2, 3, 4])\\nB = np.array([2, 3, 4, 5])\\n\\nC=np.dot(A,B)\\nC\\n```\"},{\"metadata\":{\"cell_id\":\"9fdab77c88a945519b072b3b035c3398\",\"tags\":[\"l2\",\"content\",\"s2\"]},\"cell_type\":\"markdown\",\"source\":\"## 2. Max, Min, ArgMax, ArgMin\\n\\nFour simple functions that help a great deal when performing numerical computations on a large array of data is max(), min(), argmax() and argmin().\\n\\n* max() - can be used to find out what is the maximum value in a given array\\n* min() - can be used to find out what is the minimum value in a given array\\n* argmax() - can be used to find out what is the index position of the maximum value in the given array\\n* argmin () - can be used to find out what is the index position of the minimum value in the given array\\n\\nFor this we are going to use the shape_shifter variable from the last notebook. You can generate your own set of values using \\n\\n\\n\\n```python\\n\\nyour_own_array = np.random.rand(12)\\n\\n# from numpy_1 notebook \\nshape_shifter\\n\\n# Output\\n>>> array([ 0.906423  ,  0.55807204,  0.28928162,  0.47020116,  0.27403332,\\n>>>         0.94178672,  0.81342077,  0.5859645 ,  0.63569185,  0.84614272,\\n>>>         0.36454835,  0.63664789])\\n\\nshape_shifter.max()\\n# Output\\n>>> 0.94178671566784411\\n\\nshape_shifter.min()\\n# Output\\n>>> 0.27403331882439208\\n\\nshape_shifter.argmax()\\n# Output\\n>>> 5\\n\\nshape_shifter.argmin()\\n# Output\\n>>> 4\\n```\\n\\n### Exercise\\n\\nAn array is created below. Use the max, min, argmax and argmin functions on the given array and print the results out\"},{\"metadata\":{\"cell_id\":\"9e154696c870429680cd39e91f32f855\",\"tags\":[\"l2\",\"ce\",\"s2\"],\"trusted\":true},\"cell_type\":\"code\",\"source\":\"# Edit the code below\\n\\nX = np.array([70, 81, 80, 55, 48, 17, 60, 80, 20, 46])\\n# max_X = \\n# min_X = \\n# argmax_X = \\n# argmin_X = \",\"execution_count\":2,\"outputs\":[]},{\"metadata\":{\"ExecuteTime\":{\"end_time\":\"2018-08-26T16:42:51.981423Z\",\"start_time\":\"2018-08-26T16:42:51.962474Z\"},\"cell_id\":\"49e47c5c840a4b71a90985c66dc53888\",\"collapsed\":true,\"hide_input\":true,\"tags\":[\"l2\",\"s2\",\"ans\"]},\"cell_type\":\"markdown\",\"source\":\"### Solution code\\n\\n```python\\nmax_X = X.max()\\nmin_X = X.min()\\nargmax_X = X.argmax()\\nargmin_X = X.argmin()\\nprint(\\\"Max value is %d,\\\\nMin value is %d,\\\\nMax value index is %d,\\\\nMin value index is %d\\\"\\n      %(max_X,min_X,argmax_X,argmin_X))\\n```\"},{\"metadata\":{\"cell_id\":\"7d3421ca5b794c59a487f52cdaeb17aa\"},\"cell_type\":\"markdown\",\"source\":\"## 3. More array operations and attributes\\n\\nCommon operations such as square root and exponential functions can be computed with the extensions that are common to most other languages such as :\\n\\n```python\\n# Usage of square root and exponential\\nnumpy.sqrt(B), numpy.exp(A), \\n```\\n\\nBelow is a list of functions (and some attributes which can be extracted) that can be performed on a given array. Observe that the print statement details the functionalities of each of the specific functions.\\n\\n```python\\n# Importing numpy library\\nimport numpy as np\\n\\n# data\\na = np.array([366,4,6,74,243,45,234,636,223,7,2,574])\\n\\n# Printing results\\nprint('''Array of cummulative sums of elements of the original array: {},\\n         Array of cummulative products of elements of the original array: {},\\n         Average of all elements of the array: {:.2f},\\n         Sum of all elements of the array: {},\\n         Product of all elements of the array: {},\\n         Standard deviation of all elements of the array: {:.2f}'''.format(\\n         a.cumsum(),\\n         a.cumprod(),\\n         a.mean(),\\n         a.sum(),\\n         a.prod(),\\n         a.std())\\n\\n# Output\\n>>> Array of cummulative sums of elements of the original array: [ 366  370  376  450  693  738  972 1608 1831 1838 1840 2414],\\n>>> Array of cummulative products of elements of the original array: [ 366  1464  8784  650016  157953888  -1482009632  1102097088  854078720  1480993536  1777020160  -740926976  -90321920],\\n>>> Average of all elements of the array: 201.17,\\n>>> Sum of all elements of the array: 2414,\\n>>> Product of all element of the array: -90321920,\\n>>> Standard deviation of all elements of the array: 214.76\\n\\n# Sorting array in-place, this changes the original array vs the built-in sorted method which does not affect original array\\na.sort()\\n\\n# Sorted array\\na\\n\\n# Output\\n>>> array([  2,   4,   6,   7,  45,  74, 223, 234, 243, 366, 574, 636])\\n```\\n\\nSome functions that can be performed on 2-dimensional arrays are:\\n* diagonal() - This function returns the diagonal elements of an n-dimensional array (required - where number of elements on each dimension is equal). When diagonal function is applied on n-dimensional array which have unequal dimension lengths, the function considers the largest possible equal-dimension data structure among the given data array and prints the diagonal elements of that data structure.\\n* flatten() - This function collapses the multi-dimensional array into a 1-dimensional array and returns it.\\n* transpose() - This function returns the transpose of the given n-dimensional array, i.e., swaps the elements on dimensions. In a 2-dimensional array, rows become columns and columns become rows.\\n\\nExamples:\\n```python\\n# Importing numpy library\\nimport numpy as np\\n\\n# data\\nb = np.array([[366,4,6],[74,243,45],[234,636,223]])\\n\\n# Printing results\\nprint('''b is a {:d}-dimensional array,\\n         Diagonal of b is: {},\\n         1-dimensional equivalent of b is: {},\\n         Transpose of b is: {}'''.format(\\n         len(b.shape),\\n         b.diagonal(),\\n         b.flatten(),\\n         b.transpose()))\\n         \\n# Output\\n>>> b is a 2-dimensional array,\\n>>> Diagonal of b is: [366 243 223],\\n>>> 1-dimensional equivalent of b is: [366   4   6  74 243  45 234 636 223],\\n>>> Transpose of b is: [[366  74 234]\\n>>> [  4 243 636]\\n>>> [  6  45 223]]\\n```\\n\\n#### Exercise\\n\\nGiven a = [52,64,35,6,67,24,12,36,2], Find:\\n* shape of the array\\n* index of maximum value element\\n* average of all elements of the array\\n* Cummulative sum of the first 6 elements\"},{\"metadata\":{\"cell_id\":\"b0b9d06064bb47d3a6fd56ee5a73b1a6\",\"trusted\":true},\"cell_type\":\"code\",\"source\":\"# Importing numpy\\nimport numpy as np\\n\\n# data\\na = np.array([52,64,35,6,67,24,12,36,2])\",\"execution_count\":3,\"outputs\":[]},{\"metadata\":{\"cell_id\":\"a9533ab54f0041dc8f7677f51af7942d\",\"hide_input\":true},\"cell_type\":\"markdown\",\"source\":\"### Solution code\\n\\n```python\\nprint('''Shape of array 'a':{},\\n         Index of element with maximum value: {},\\n         Average of all elements of the array: {},\\n         Cummulative sum of first 6 elements of the array: {}'''.format(a.shape,a.argmax(),a.mean(),a.cumsum()[5]))\\n```\"},{\"metadata\":{\"cell_id\":\"945c814576704bb9a7822cd78ab56396\"},\"cell_type\":\"markdown\",\"source\":\"## 4. Some special numpy functions\\n\\n### 4.1 arange() function\\n\\nThere is a basic function in python to generate a list of values. **range**(lower, upper, increment) - where the function starts from the lower value and iterates the value using increment, up to the upper value(exclusive). <br>\\nNumpy's **arange**(lower, upper, increment) function has the same functionality, except that the output of this function would be an array with the iterated values.\\n\\nFor example:\\n```python\\nnp.arange(1,5)\\n>>> array([1, 2, 3, 4])\\n\\nnp.arange(1,11,2)\\n>>> array([1, 3, 5, 7, 9])\\n\\nnp.arange(11,1,-2)\\n>>> array([11,  9,  7,  5,  3])\\n```\\n\\n### Exercise\\n\\nCreate 2 arrays with values 1,2,3,4 and 5.\\n* first array using **range()** function\\n* second array using **arange()** function\"},{\"metadata\":{\"cell_id\":\"9a49ea397573461b96a9952228632453\",\"trusted\":true},\"cell_type\":\"code\",\"source\":\"array_one = []\\narray_two = []\",\"execution_count\":4,\"outputs\":[]},{\"metadata\":{\"cell_id\":\"f299cbfb5caa4f7597c00a54e27d9589\",\"hide_input\":true},\"cell_type\":\"markdown\",\"source\":\"### Solution code\\n\\n```python\\narray_one = []\\nfor i in range(1,6):\\n    array_one.append(i)\\narray_one = np.array(array_one)\\narray_two = np.arange(1,6)\\n\\nprint(array_one, array_two)\\n```\"},{\"metadata\":{\"cell_id\":\"b16cb8309ed249d29712d553764c2db0\"},\"cell_type\":\"markdown\",\"source\":\"### 4.2 linspace() function\\n\\nThe linear space function creates an array of values which are equally spaced within specified limits. The function accepts a lower limit, an upper limit and the length of the array(say 'n') and it generates _'n'_ equally spaced elements from lower limit to upper limit (inclusive).\\n\\n```python\\nnp.linspace(1,5,5)\\n>>> array([ 1.,  2.,  3.,  4.,  5.])\\n\\nnp.linspace(0,1,10)\\n>>> array([ 0.        ,  0.11111111,  0.22222222,  0.33333333,  0.44444444,\\n         0.55555556,  0.66666667,  0.77777778,  0.88888889,  1.        ])\\n\\nnp.linspace(-6,6,5)\\n>>> array([-6., -3.,  0.,  3.,  6.])\\n```\\n\\n### Exercise\\n\\nInitialize and print:\\n* a linearly spaced array with 5 values between 5 and 50\"},{\"metadata\":{\"cell_id\":\"49c60f4cffa24706889de49513e879a0\",\"trusted\":true},\"cell_type\":\"code\",\"source\":\"# Modify code below\\n\\nlin_arr = []\",\"execution_count\":5,\"outputs\":[]},{\"metadata\":{\"cell_id\":\"99dfc09299c94fdc84a3d26d9b6d94ea\",\"hide_input\":true},\"cell_type\":\"markdown\",\"source\":\"### Solution code\\n\\n```python\\nlin_arr = np.linspace(5,50,5)\\nlin_arr\\n```\"},{\"metadata\":{\"cell_id\":\"095d120b415248dd87e06404c4e4cc3e\"},\"cell_type\":\"markdown\",\"source\":\"### 4.3 Zeros, Ones and Eye\\n\\nThe **np.zeros()** and **np.ones()** functions are used to create n-dimensional arrays with all elements as zeros or ones respectively. Such arrays are extremely useful in many numeric and mathematical operations. The functions take the shape of the array that is to be created, as the argument.\\n\\n```python\\nnp.zeros(1,5)\\n>>> array([[ 0.,  0.,  0.,  0.,  0.]])\\n\\nnp.ones((2,4))\\n>>> array([[1., 1., 1., 1.],\\n       [1., 1., 1., 1.]])\\n```\\n\\nThe **np.eye()** function creates a square matrix, nxn, with all diagonal elements as ones and all non-diagonal elements are zeros. In mathematics, such kind of a matrix is called the \\\"Identity Matrix\\\", as the multiplicative product of any matrix A and the appropriate identity matrix, is always A itself.\\n\\n``` python\\nnp.eye(2)\\n>>> array([[1., 0.],\\n       [0., 1.]])\\n```\\n<img src=\\\"../../../images/numpy_1-zeroes_ones_eye.png\\\">\\n<br>\\n\\n### Exercise\\n\\nInitiate three arrays:\\n* A zeros array of shape (3,3)\\n* A ones array of shape (4,4)\\n* A 3x3 Identity Matrix\"},{\"metadata\":{\"cell_id\":\"079ef76513aa4a0fa2a4e104226c206c\",\"trusted\":true},\"cell_type\":\"code\",\"source\":\"# Modify code below\\n\\nzeros_arr = []\\nones_arr = []\\neye_mat = []\",\"execution_count\":6,\"outputs\":[]},{\"metadata\":{\"cell_id\":\"0640760fefc345d8b5890d5a922c5ded\",\"hide_input\":true},\"cell_type\":\"markdown\",\"source\":\"### Solution code\\n\\n```python\\nzeros_arr = np.zeros((3,3))\\nones_arr = np.ones((4,4))\\neye_mat = np.eye(3)\\n```\"}],\"metadata\":{\"celltoolbar\":\"Edit Metadata\",\"executed_sections\":[],\"kernelspec\":{\"name\":\"python3\",\"display_name\":\"Python 3\",\"language\":\"python\"},\"language_info\":{\"name\":\"python\",\"version\":\"3.6.6\",\"mimetype\":\"text/x-python\",\"codemirror_mode\":{\"name\":\"ipython\",\"version\":3},\"pygments_lexer\":\"ipython3\",\"nbconvert_exporter\":\"python\",\"file_extension\":\".py\"},\"rf_version\":1},\"nbformat\":4,\"nbformat_minor\":2}}",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"accept": "application/json, text/javascript, */*; q=0.01",
					"sec-fetch-dest": "empty",
					"x-requested-with": "XMLHttpRequest",
					"x-xsrftoken": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/json",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(7.87);
		req = [{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792482363",
			"body": {
				"data": "eyJldmVudCI6ICJjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogImk4cHM3MWJsNDBpa3hsZHgiLCJ0aW1lIjogMTU5Njc5MjQ4Mi4zNjMsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJjZWxsX2lkIjogIjAzYWM3ZTg4ZmVjYTQ3NzI4YmY3MmJjOTRlMjU2MTBkIiwidG9rZW4iOiAiNmEwNDFiY2I2YzBlNmU1MjUyZjY3MGM4ZjVmNWRiOWUifX0="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecution",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "03ac7e88feca47728bf72bc94e25610d"
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792482370",
			"body": {
				"data": "eyJldmVudCI6ICJjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogIjJzMGZjaWxhcDdkb2lqYTAiLCJ0aW1lIjogMTU5Njc5MjQ4Mi4zNjksImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJjZWxsX2lkIjogIjllMTU0Njk2Yzg3MDQyOTY4MGNkMzllOTFmMzJmODU1IiwidG9rZW4iOiAiNmEwNDFiY2I2YzBlNmU1MjUyZjY3MGM4ZjVmNWRiOWUifX0="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecution",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "9e154696c870429680cd39e91f32f855"
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792482376",
			"body": {
				"data": "eyJldmVudCI6ICJjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogInVsczkydGp6cGhmZzA4MzciLCJ0aW1lIjogMTU5Njc5MjQ4Mi4zNzUsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJjZWxsX2lkIjogImIwYjlkMDYwNjRiYjQ3ZDNhNmZkNTZlZTVhNzNiMWE2IiwidG9rZW4iOiAiNmEwNDFiY2I2YzBlNmU1MjUyZjY3MGM4ZjVmNWRiOWUifX0="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecution",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "b0b9d06064bb47d3a6fd56ee5a73b1a6"
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792482381",
			"body": {
				"data": "eyJldmVudCI6ICJjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogIm5yY2xnbmQ2cGswODF4cXIiLCJ0aW1lIjogMTU5Njc5MjQ4Mi4zOCwiZGlzdGluY3RfaWQiOiAibWFuaXJ2IiwiJGRldmljZV9pZCI6ICIxNzNjODNkNzk3MDZkYS0wMjZlOWExODE0OWYxLTMxN2UwYzVlLTFmYTQwMC0xNzNjODNkNzk3MWE1NiIsIiR1c2VyX2lkIjogIm1hbmlydiIsIiRpbml0aWFsX3JlZmVycmVyIjogImh0dHBzOi8vZHNpbjEwMGRheXMucmVmYWN0b3JlZC5haS9odWIvc3Bhd24tcGVuZGluZy9tYW5pcnY/bmV4dD0lMkZodWIlMkZ1c2VyJTJGbWFuaXJ2JTJGbm90ZWJvb2tzJTJGZHNpbjEwMGRheXMlMkZjb250ZW50JTJGMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMlMkYwOC1Db21wdXRhdGlvbnNfd2l0aF9OdW1weSUyRm51bXB5XzIuaXB5bmIiLCIkaW5pdGlhbF9yZWZlcnJpbmdfZG9tYWluIjogImRzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkiLCJub3RlYm9va19wYXRoIjogImRzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsImNlbGxfaWQiOiAiOWE0OWVhMzk3NTczNDYxYjk2YTk5NTIyMjg2MzI0NTMiLCJ0b2tlbiI6ICI2YTA0MWJjYjZjMGU2ZTUyNTJmNjcwYzhmNWY1ZGI5ZSJ9fQ=="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecution",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "9a49ea397573461b96a9952228632453"
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792482387",
			"body": {
				"data": "eyJldmVudCI6ICJjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogInFiNHNsNnJ3bGk1a2MxNnQiLCJ0aW1lIjogMTU5Njc5MjQ4Mi4zODcsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJjZWxsX2lkIjogIjQ5YzYwZjRjZmZhMjQ3MDY4ODlkZTQ5NTEzZTg3OWEwIiwidG9rZW4iOiAiNmEwNDFiY2I2YzBlNmU1MjUyZjY3MGM4ZjVmNWRiOWUifX0="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecution",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "49c60f4cffa24706889de49513e879a0"
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792482392",
			"body": {
				"data": "eyJldmVudCI6ICJjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogIm44YnJqazRjOGpiaHJzajgiLCJ0aW1lIjogMTU5Njc5MjQ4Mi4zOTEsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJjZWxsX2lkIjogIjA3OWVmNzY1MTNhYTRhMGZhMmE0ZTEwNDIyNmMyMDZjIiwidG9rZW4iOiAiNmEwNDFiY2I2YzBlNmU1MjUyZjY3MGM4ZjVmNWRiOWUifX0="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecution",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "079ef76513aa4a0fa2a4e104226c206c"
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792482688",
			"body": {
				"data": "eyJldmVudCI6ICJmaW5pc2hlZCBjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogInV2YnB1d2s2eGxzZTZsNzciLCJ0aW1lIjogMTU5Njc5MjQ4Mi42ODcsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJjZWxsX2lkIjogIjAzYWM3ZTg4ZmVjYTQ3NzI4YmY3MmJjOTRlMjU2MTBkIiwic3RhdHVzIjogInN1Y2Nlc3MiLCJ0b2tlbiI6ICI2YTA0MWJjYjZjMGU2ZTUyNTJmNjcwYzhmNWY1ZGI5ZSJ9fQ=="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecutionresult",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "03ac7e88feca47728bf72bc94e25610d",
				"result": "[object Object]",
				"is_error": "false"
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792482704",
			"body": {
				"data": "eyJldmVudCI6ICJmaW5pc2hlZCBjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogImRnbWQ2dnh3eWdnZnM4NTEiLCJ0aW1lIjogMTU5Njc5MjQ4Mi43MDMsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJjZWxsX2lkIjogIjllMTU0Njk2Yzg3MDQyOTY4MGNkMzllOTFmMzJmODU1Iiwic3RhdHVzIjogIiIsInRva2VuIjogIjZhMDQxYmNiNmMwZTZlNTI1MmY2NzBjOGY1ZjVkYjllIn19"
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecutionresult",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "9e154696c870429680cd39e91f32f855",
				"result": "",
				"is_error": ""
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792482944",
			"body": {
				"data": "eyJldmVudCI6ICJmaW5pc2hlZCBjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogInBuY284ZzVsOGx1dWFtM2UiLCJ0aW1lIjogMTU5Njc5MjQ4Mi45NDIsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJjZWxsX2lkIjogImIwYjlkMDYwNjRiYjQ3ZDNhNmZkNTZlZTVhNzNiMWE2Iiwic3RhdHVzIjogIiIsInRva2VuIjogIjZhMDQxYmNiNmMwZTZlNTI1MmY2NzBjOGY1ZjVkYjllIn19"
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecutionresult",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "b0b9d06064bb47d3a6fd56ee5a73b1a6",
				"result": "",
				"is_error": ""
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792482966",
			"body": {
				"data": "eyJldmVudCI6ICJmaW5pc2hlZCBjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogIm01d2J6aW8wNHlkYnJuNGgiLCJ0aW1lIjogMTU5Njc5MjQ4Mi45NjUsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJjZWxsX2lkIjogIjlhNDllYTM5NzU3MzQ2MWI5NmE5OTUyMjI4NjMyNDUzIiwic3RhdHVzIjogIiIsInRva2VuIjogIjZhMDQxYmNiNmMwZTZlNTI1MmY2NzBjOGY1ZjVkYjllIn19"
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecutionresult",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "9a49ea397573461b96a9952228632453",
				"result": "",
				"is_error": ""
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792482981",
			"body": {
				"data": "eyJldmVudCI6ICJmaW5pc2hlZCBjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogIjloenQ1cGxqMHN2MXIwM3MiLCJ0aW1lIjogMTU5Njc5MjQ4Mi45ODEsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJjZWxsX2lkIjogIjQ5YzYwZjRjZmZhMjQ3MDY4ODlkZTQ5NTEzZTg3OWEwIiwic3RhdHVzIjogIiIsInRva2VuIjogIjZhMDQxYmNiNmMwZTZlNTI1MmY2NzBjOGY1ZjVkYjllIn19"
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecutionresult",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "49c60f4cffa24706889de49513e879a0",
				"result": "",
				"is_error": ""
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792482991",
			"body": {
				"data": "eyJldmVudCI6ICJmaW5pc2hlZCBjZWxsIGV4ZWN1dGlvbiIsInByb3BlcnRpZXMiOiB7IiRvcyI6ICJMaW51eCIsIiRicm93c2VyIjogIkNocm9tZSIsIiRjdXJyZW50X3VybCI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvdXNlci9tYW5pcnYvbm90ZWJvb2tzL2RzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsIiRicm93c2VyX3ZlcnNpb24iOiA4MCwiJHNjcmVlbl9oZWlnaHQiOiAxMDgwLCIkc2NyZWVuX3dpZHRoIjogMTkyMCwibXBfbGliIjogIndlYiIsIiRsaWJfdmVyc2lvbiI6ICIyLjM4LjAiLCIkaW5zZXJ0X2lkIjogImhpNjN1cTltZXc1bXA5eGUiLCJ0aW1lIjogMTU5Njc5MjQ4Mi45OSwiZGlzdGluY3RfaWQiOiAibWFuaXJ2IiwiJGRldmljZV9pZCI6ICIxNzNjODNkNzk3MDZkYS0wMjZlOWExODE0OWYxLTMxN2UwYzVlLTFmYTQwMC0xNzNjODNkNzk3MWE1NiIsIiR1c2VyX2lkIjogIm1hbmlydiIsIiRpbml0aWFsX3JlZmVycmVyIjogImh0dHBzOi8vZHNpbjEwMGRheXMucmVmYWN0b3JlZC5haS9odWIvc3Bhd24tcGVuZGluZy9tYW5pcnY/bmV4dD0lMkZodWIlMkZ1c2VyJTJGbWFuaXJ2JTJGbm90ZWJvb2tzJTJGZHNpbjEwMGRheXMlMkZjb250ZW50JTJGMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMlMkYwOC1Db21wdXRhdGlvbnNfd2l0aF9OdW1weSUyRm51bXB5XzIuaXB5bmIiLCIkaW5pdGlhbF9yZWZlcnJpbmdfZG9tYWluIjogImRzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkiLCJub3RlYm9va19wYXRoIjogImRzaW4xMDBkYXlzL2NvbnRlbnQvMDItUHl0aG9uX2Zvcl9EYXRhX1NjaWVudGlzdHMvMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHkvbnVtcHlfMi5pcHluYiIsImNlbGxfaWQiOiAiMDc5ZWY3NjUxM2FhNGEwZmEyYTRlMTA0MjI2YzIwNmMiLCJzdGF0dXMiOiAiIiwidG9rZW4iOiAiNmEwNDFiY2I2YzBlNmU1MjUyZjY3MGM4ZjVmNWRiOWUifX0="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://log.refactored.ai/log/notebook/event/cellexecutionresult",
			"body": {
				"username": "manirv",
				"url": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"path": "dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
				"cell_id": "079ef76513aa4a0fa2a4e104226c206c",
				"result": "",
				"is_error": ""
			},
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Content-type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(111.12);
		req = [{
			"method": "get",
			"url": "https://dsin100days.refactored.ai/user/manirv/api/contents/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb?content=0&_=1596792351626",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"accept": "application/json, text/javascript, */*; q=0.01",
					"sec-fetch-dest": "empty",
					"x-requested-with": "XMLHttpRequest",
					"x-xsrftoken": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "put",
			"url": "https://dsin100days.refactored.ai/user/manirv/api/contents/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
			"body": "{\"type\":\"notebook\",\"content\":{\"cells\":[{\"metadata\":{\"cell_id\":\"bd62990894404ad3835d59ab2c64006d\",\"tags\":[\"s1\",\"content\",\"l1\"]},\"cell_type\":\"markdown\",\"source\":\"# Numpy II\\n\\n## 1. NumPy Array Operations\\n \\n<br>\\nIn this lesson we shall study various operations on numpy arrays. \\n\\n#### 1.1 Addition of two arrays\\n\\nTo add another array of the same dimension use\\n```python\\nC = np.add(A, B)      OR     C = A + B\\n```\\n\\n#### 1.2 Subtraction of two arrays\\n\\nTo subtract an array from another array use \\n```python\\nD = np.subtract(A,B)  OR     D = A - B\\n```\\n\\n#### 1.3 Multiplication\\n\\nUsing \\\\_\\\\_np.multiply\\\\_\\\\_ (or the \\\\_\\\\_\\\\* symbol\\\\_\\\\_) you can\\n\\n<b>1. multiply a constant with the elements of the array</b>\\n```python\\nK = 10\\nY = np.multiply(K,[1, 2, 3, 4, 5])   OR     Y = K * np.array([1, 2, 3, 4, 5])\\n\\n# Output\\n>>> array([10, 20, 30, 40, 50])\\n```\\n<b>2. multiply an array with another array, performs element-wise multiplication (only if both arrays are of equal shape)</b>\\n``` python\\nA = np.array([1,2,3])\\nB = np.array([4,5,6])\\nC = np.multiply(A,B)                 OR     C = A * B\\n\\n# Output\\n>>> array([ 4, 10, 18])\\n```\\n\\nUsing \\\\_\\\\_np.dot\\\\_\\\\_ you can perform\\n\\n<b>3. dot product of two arrays, calculates sum of product of elements (only if both arrays are of equal shape)</b>\\n```python\\nA = np.array([1,2,3])\\nB = np.array([4,5,6])\\nC = np.dot(A, B)\\n\\n# Output\\n>>> 32\\n```\\n\\nUsing \\\\_\\\\_np.matmul\\\\_\\\\_ you can perform\\n\\n<b>4. matrix multiplication (only if number of columns in the 1st one equals the number of rows in the 2nd one)</b>\\n``` python\\nA = [[1, 0], [0, 1]]\\nB = [[4, 1], [2, 2]]\\nC = np.matmul(A, B)\\n\\n# Output\\n>>> array([[4, 1],\\n       [2, 2]])\\n```\\n\\n\\n### Exercise:\\n\\nGiven two arrays:\\n```python\\nA = [1, 2, 3, 4]\\nB = [2, 3, 4, 5]\\n```\\n\\n- Initilize the above arrays as variables A & B.\\n- Perform a dot product of the two vectors and assign it to the variable C.\\n- Print C.\"},{\"metadata\":{\"ExecuteTime\":{\"end_time\":\"2018-08-26T16:37:41.542334Z\",\"start_time\":\"2018-08-26T16:37:41.111929Z\"},\"cell_id\":\"03ac7e88feca47728bf72bc94e25610d\",\"tags\":[\"s1\",\"ce\",\"l1\"],\"trusted\":true},\"cell_type\":\"code\",\"source\":\"import numpy as np\\nA = np.array([1, 2, 3, 4])\\nB = np.array([2, 3, 4, 5])\\n\\nC=np.dot(A,B)\\nC\",\"execution_count\":3,\"outputs\":[{\"output_type\":\"execute_result\",\"execution_count\":3,\"data\":{\"text/plain\":\"40\"},\"metadata\":{}}]},{\"metadata\":{\"cell_id\":\"63b7b82b5f22497ebb96393ca6e3d9fc\",\"collapsed\":true,\"hide_input\":false,\"tags\":[\"s1\",\"l1\",\"ans\"]},\"cell_type\":\"markdown\",\"source\":\"### Solution code\\n\\n```python\\nA = np.array([1, 2, 3, 4])\\nB = np.array([2, 3, 4, 5])\\n\\nC=np.dot(A,B)\\nC\\n```\"},{\"metadata\":{\"cell_id\":\"9fdab77c88a945519b072b3b035c3398\",\"tags\":[\"l2\",\"content\",\"s2\"]},\"cell_type\":\"markdown\",\"source\":\"## 2. Max, Min, ArgMax, ArgMin\\n\\nFour simple functions that help a great deal when performing numerical computations on a large array of data is max(), min(), argmax() and argmin().\\n\\n* max() - can be used to find out what is the maximum value in a given array\\n* min() - can be used to find out what is the minimum value in a given array\\n* argmax() - can be used to find out what is the index position of the maximum value in the given array\\n* argmin () - can be used to find out what is the index position of the minimum value in the given array\\n\\nFor this we are going to use the shape_shifter variable from the last notebook. You can generate your own set of values using \\n\\n\\n\\n```python\\n\\nyour_own_array = np.random.rand(12)\\n\\n# from numpy_1 notebook \\nshape_shifter\\n\\n# Output\\n>>> array([ 0.906423  ,  0.55807204,  0.28928162,  0.47020116,  0.27403332,\\n>>>         0.94178672,  0.81342077,  0.5859645 ,  0.63569185,  0.84614272,\\n>>>         0.36454835,  0.63664789])\\n\\nshape_shifter.max()\\n# Output\\n>>> 0.94178671566784411\\n\\nshape_shifter.min()\\n# Output\\n>>> 0.27403331882439208\\n\\nshape_shifter.argmax()\\n# Output\\n>>> 5\\n\\nshape_shifter.argmin()\\n# Output\\n>>> 4\\n```\\n\\n### Exercise\\n\\nAn array is created below. Use the max, min, argmax and argmin functions on the given array and print the results out\"},{\"metadata\":{\"cell_id\":\"9e154696c870429680cd39e91f32f855\",\"tags\":[\"l2\",\"ce\",\"s2\"],\"trusted\":true},\"cell_type\":\"code\",\"source\":\"# Edit the code below\\n\\nX = np.array([70, 81, 80, 55, 48, 17, 60, 80, 20, 46])\\n# max_X = \\n# min_X = \\n# argmax_X = \\n# argmin_X = \",\"execution_count\":4,\"outputs\":[]},{\"metadata\":{\"ExecuteTime\":{\"end_time\":\"2018-08-26T16:42:51.981423Z\",\"start_time\":\"2018-08-26T16:42:51.962474Z\"},\"cell_id\":\"49e47c5c840a4b71a90985c66dc53888\",\"collapsed\":true,\"hide_input\":true,\"tags\":[\"l2\",\"s2\",\"ans\"]},\"cell_type\":\"markdown\",\"source\":\"### Solution code\\n\\n```python\\nmax_X = X.max()\\nmin_X = X.min()\\nargmax_X = X.argmax()\\nargmin_X = X.argmin()\\nprint(\\\"Max value is %d,\\\\nMin value is %d,\\\\nMax value index is %d,\\\\nMin value index is %d\\\"\\n      %(max_X,min_X,argmax_X,argmin_X))\\n```\"},{\"metadata\":{\"cell_id\":\"7d3421ca5b794c59a487f52cdaeb17aa\"},\"cell_type\":\"markdown\",\"source\":\"## 3. More array operations and attributes\\n\\nCommon operations such as square root and exponential functions can be computed with the extensions that are common to most other languages such as :\\n\\n```python\\n# Usage of square root and exponential\\nnumpy.sqrt(B), numpy.exp(A), \\n```\\n\\nBelow is a list of functions (and some attributes which can be extracted) that can be performed on a given array. Observe that the print statement details the functionalities of each of the specific functions.\\n\\n```python\\n# Importing numpy library\\nimport numpy as np\\n\\n# data\\na = np.array([366,4,6,74,243,45,234,636,223,7,2,574])\\n\\n# Printing results\\nprint('''Array of cummulative sums of elements of the original array: {},\\n         Array of cummulative products of elements of the original array: {},\\n         Average of all elements of the array: {:.2f},\\n         Sum of all elements of the array: {},\\n         Product of all elements of the array: {},\\n         Standard deviation of all elements of the array: {:.2f}'''.format(\\n         a.cumsum(),\\n         a.cumprod(),\\n         a.mean(),\\n         a.sum(),\\n         a.prod(),\\n         a.std())\\n\\n# Output\\n>>> Array of cummulative sums of elements of the original array: [ 366  370  376  450  693  738  972 1608 1831 1838 1840 2414],\\n>>> Array of cummulative products of elements of the original array: [ 366  1464  8784  650016  157953888  -1482009632  1102097088  854078720  1480993536  1777020160  -740926976  -90321920],\\n>>> Average of all elements of the array: 201.17,\\n>>> Sum of all elements of the array: 2414,\\n>>> Product of all element of the array: -90321920,\\n>>> Standard deviation of all elements of the array: 214.76\\n\\n# Sorting array in-place, this changes the original array vs the built-in sorted method which does not affect original array\\na.sort()\\n\\n# Sorted array\\na\\n\\n# Output\\n>>> array([  2,   4,   6,   7,  45,  74, 223, 234, 243, 366, 574, 636])\\n```\\n\\nSome functions that can be performed on 2-dimensional arrays are:\\n* diagonal() - This function returns the diagonal elements of an n-dimensional array (required - where number of elements on each dimension is equal). When diagonal function is applied on n-dimensional array which have unequal dimension lengths, the function considers the largest possible equal-dimension data structure among the given data array and prints the diagonal elements of that data structure.\\n* flatten() - This function collapses the multi-dimensional array into a 1-dimensional array and returns it.\\n* transpose() - This function returns the transpose of the given n-dimensional array, i.e., swaps the elements on dimensions. In a 2-dimensional array, rows become columns and columns become rows.\\n\\nExamples:\\n```python\\n# Importing numpy library\\nimport numpy as np\\n\\n# data\\nb = np.array([[366,4,6],[74,243,45],[234,636,223]])\\n\\n# Printing results\\nprint('''b is a {:d}-dimensional array,\\n         Diagonal of b is: {},\\n         1-dimensional equivalent of b is: {},\\n         Transpose of b is: {}'''.format(\\n         len(b.shape),\\n         b.diagonal(),\\n         b.flatten(),\\n         b.transpose()))\\n         \\n# Output\\n>>> b is a 2-dimensional array,\\n>>> Diagonal of b is: [366 243 223],\\n>>> 1-dimensional equivalent of b is: [366   4   6  74 243  45 234 636 223],\\n>>> Transpose of b is: [[366  74 234]\\n>>> [  4 243 636]\\n>>> [  6  45 223]]\\n```\\n\\n#### Exercise\\n\\nGiven a = [52,64,35,6,67,24,12,36,2], Find:\\n* shape of the array\\n* index of maximum value element\\n* average of all elements of the array\\n* Cummulative sum of the first 6 elements\"},{\"metadata\":{\"cell_id\":\"b0b9d06064bb47d3a6fd56ee5a73b1a6\",\"trusted\":true},\"cell_type\":\"code\",\"source\":\"# Importing numpy\\nimport numpy as np\\n\\n# data\\na = np.array([52,64,35,6,67,24,12,36,2])\",\"execution_count\":5,\"outputs\":[]},{\"metadata\":{\"cell_id\":\"a9533ab54f0041dc8f7677f51af7942d\",\"hide_input\":true},\"cell_type\":\"markdown\",\"source\":\"### Solution code\\n\\n```python\\nprint('''Shape of array 'a':{},\\n         Index of element with maximum value: {},\\n         Average of all elements of the array: {},\\n         Cummulative sum of first 6 elements of the array: {}'''.format(a.shape,a.argmax(),a.mean(),a.cumsum()[5]))\\n```\"},{\"metadata\":{\"cell_id\":\"945c814576704bb9a7822cd78ab56396\"},\"cell_type\":\"markdown\",\"source\":\"## 4. Some special numpy functions\\n\\n### 4.1 arange() function\\n\\nThere is a basic function in python to generate a list of values. **range**(lower, upper, increment) - where the function starts from the lower value and iterates the value using increment, up to the upper value(exclusive). <br>\\nNumpy's **arange**(lower, upper, increment) function has the same functionality, except that the output of this function would be an array with the iterated values.\\n\\nFor example:\\n```python\\nnp.arange(1,5)\\n>>> array([1, 2, 3, 4])\\n\\nnp.arange(1,11,2)\\n>>> array([1, 3, 5, 7, 9])\\n\\nnp.arange(11,1,-2)\\n>>> array([11,  9,  7,  5,  3])\\n```\\n\\n### Exercise\\n\\nCreate 2 arrays with values 1,2,3,4 and 5.\\n* first array using **range()** function\\n* second array using **arange()** function\"},{\"metadata\":{\"cell_id\":\"9a49ea397573461b96a9952228632453\",\"trusted\":true},\"cell_type\":\"code\",\"source\":\"array_one = []\\narray_two = []\",\"execution_count\":6,\"outputs\":[]},{\"metadata\":{\"cell_id\":\"f299cbfb5caa4f7597c00a54e27d9589\",\"hide_input\":true},\"cell_type\":\"markdown\",\"source\":\"### Solution code\\n\\n```python\\narray_one = []\\nfor i in range(1,6):\\n    array_one.append(i)\\narray_one = np.array(array_one)\\narray_two = np.arange(1,6)\\n\\nprint(array_one, array_two)\\n```\"},{\"metadata\":{\"cell_id\":\"b16cb8309ed249d29712d553764c2db0\"},\"cell_type\":\"markdown\",\"source\":\"### 4.2 linspace() function\\n\\nThe linear space function creates an array of values which are equally spaced within specified limits. The function accepts a lower limit, an upper limit and the length of the array(say 'n') and it generates _'n'_ equally spaced elements from lower limit to upper limit (inclusive).\\n\\n```python\\nnp.linspace(1,5,5)\\n>>> array([ 1.,  2.,  3.,  4.,  5.])\\n\\nnp.linspace(0,1,10)\\n>>> array([ 0.        ,  0.11111111,  0.22222222,  0.33333333,  0.44444444,\\n         0.55555556,  0.66666667,  0.77777778,  0.88888889,  1.        ])\\n\\nnp.linspace(-6,6,5)\\n>>> array([-6., -3.,  0.,  3.,  6.])\\n```\\n\\n### Exercise\\n\\nInitialize and print:\\n* a linearly spaced array with 5 values between 5 and 50\"},{\"metadata\":{\"cell_id\":\"49c60f4cffa24706889de49513e879a0\",\"trusted\":true},\"cell_type\":\"code\",\"source\":\"# Modify code below\\n\\nlin_arr = []\",\"execution_count\":7,\"outputs\":[]},{\"metadata\":{\"cell_id\":\"99dfc09299c94fdc84a3d26d9b6d94ea\",\"hide_input\":true},\"cell_type\":\"markdown\",\"source\":\"### Solution code\\n\\n```python\\nlin_arr = np.linspace(5,50,5)\\nlin_arr\\n```\"},{\"metadata\":{\"cell_id\":\"095d120b415248dd87e06404c4e4cc3e\"},\"cell_type\":\"markdown\",\"source\":\"### 4.3 Zeros, Ones and Eye\\n\\nThe **np.zeros()** and **np.ones()** functions are used to create n-dimensional arrays with all elements as zeros or ones respectively. Such arrays are extremely useful in many numeric and mathematical operations. The functions take the shape of the array that is to be created, as the argument.\\n\\n```python\\nnp.zeros(1,5)\\n>>> array([[ 0.,  0.,  0.,  0.,  0.]])\\n\\nnp.ones((2,4))\\n>>> array([[1., 1., 1., 1.],\\n       [1., 1., 1., 1.]])\\n```\\n\\nThe **np.eye()** function creates a square matrix, nxn, with all diagonal elements as ones and all non-diagonal elements are zeros. In mathematics, such kind of a matrix is called the \\\"Identity Matrix\\\", as the multiplicative product of any matrix A and the appropriate identity matrix, is always A itself.\\n\\n``` python\\nnp.eye(2)\\n>>> array([[1., 0.],\\n       [0., 1.]])\\n```\\n<img src=\\\"../../../images/numpy_1-zeroes_ones_eye.png\\\">\\n<br>\\n\\n### Exercise\\n\\nInitiate three arrays:\\n* A zeros array of shape (3,3)\\n* A ones array of shape (4,4)\\n* A 3x3 Identity Matrix\"},{\"metadata\":{\"cell_id\":\"079ef76513aa4a0fa2a4e104226c206c\",\"trusted\":true},\"cell_type\":\"code\",\"source\":\"# Modify code below\\n\\nzeros_arr = []\\nones_arr = []\\neye_mat = []\",\"execution_count\":8,\"outputs\":[]},{\"metadata\":{\"cell_id\":\"0640760fefc345d8b5890d5a922c5ded\",\"hide_input\":true},\"cell_type\":\"markdown\",\"source\":\"### Solution code\\n\\n```python\\nzeros_arr = np.zeros((3,3))\\nones_arr = np.ones((4,4))\\neye_mat = np.eye(3)\\n```\"}],\"metadata\":{\"celltoolbar\":\"Edit Metadata\",\"executed_sections\":[],\"kernelspec\":{\"name\":\"python3\",\"display_name\":\"Python 3\",\"language\":\"python\"},\"language_info\":{\"name\":\"python\",\"version\":\"3.6.6\",\"mimetype\":\"text/x-python\",\"codemirror_mode\":{\"name\":\"ipython\",\"version\":3},\"pygments_lexer\":\"ipython3\",\"nbconvert_exporter\":\"python\",\"file_extension\":\".py\"},\"rf_version\":1},\"nbformat\":4,\"nbformat_minor\":2}}",
			"params": {
				"cookies": {
					"jupyterhub-user-manirv": "2|1:0|10:1596792326|22:jupyterhub-user-manirv|40:T0xlNzVvTkJSS3hNZ3ZDMFROR29RUU5sY1ZwUGZy|e4299403664714cf4681a3dfa26298e53c4bdb25327a9379c5582f4c78764a69",
					"_ga": "GA1.2.107055930.1596792250",
					"_gid": "GA1.2.321461439.1596792250",
					"jupyterhub-session-id": "13c9581999e04bf8ab05344e079bccc1",
					"_xsrf": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"mp_6a041bcb6c0e6e5252f670c8f5f5db9e_mixpanel": "%7B%22distinct_id%22%3A%20%22manirv%22%2C%22%24device_id%22%3A%20%22173c83d79706da-026e9a18149f1-317e0c5e-1fa400-173c83d7971a56%22%2C%22%24user_id%22%3A%20%22manirv%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fdsin100days.refactored.ai%2Fhub%2Fspawn-pending%2Fmanirv%3Fnext%3D%252Fhub%252Fuser%252Fmanirv%252Fnotebooks%252Fdsin100days%252Fcontent%252F02-Python_for_Data_Scientists%252F08-Computations_with_Numpy%252Fnumpy_2.ipynb%22%2C%22%24initial_referring_domain%22%3A%20%22dsin100days.refactored.ai%22%7D"
				},
				"headers": {
					"accept": "application/json, text/javascript, */*; q=0.01",
					"sec-fetch-dest": "empty",
					"x-requested-with": "XMLHttpRequest",
					"x-xsrftoken": "2|669b0bfd|4542aa57b87697feee72ccf5ba6e4b5d|1596792326",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/json",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(59.68);
		req = [{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792654126",
			"body": {
				"data": "eyJldmVudCI6ICJhY3RpdmUiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiTGludXgiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpL3VzZXIvbWFuaXJ2L25vdGVib29rcy9kc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogODAsIiRzY3JlZW5faGVpZ2h0IjogMTA4MCwiJHNjcmVlbl93aWR0aCI6IDE5MjAsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi4zOC4wIiwiJGluc2VydF9pZCI6ICJraGQ3MjFuZGU1czZ6bmczIiwidGltZSI6IDE1OTY3OTI2NTQxMjQsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJ0b2tlbiI6ICI2YTA0MWJjYjZjMGU2ZTUyNTJmNjcwYzhmNWY1ZGI5ZSJ9fQ=="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(300.51);
		req = [{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596792954638",
			"body": {
				"data": "eyJldmVudCI6ICJhY3RpdmUiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiTGludXgiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpL3VzZXIvbWFuaXJ2L25vdGVib29rcy9kc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogODAsIiRzY3JlZW5faGVpZ2h0IjogMTA4MCwiJHNjcmVlbl93aWR0aCI6IDE5MjAsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi4zOC4wIiwiJGluc2VydF9pZCI6ICJzdjZqOHRvbm14eXBqa241IiwidGltZSI6IDE1OTY3OTI5NTQ2MzMsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJ0b2tlbiI6ICI2YTA0MWJjYjZjMGU2ZTUyNTJmNjcwYzhmNWY1ZGI5ZSJ9fQ=="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://log.refactored.ai/log/ping?username=manirv&url=https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Sec-Fetch-Dest": "empty",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(299.99);
		req = [{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596793254628",
			"body": {
				"data": "eyJldmVudCI6ICJhY3RpdmUiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiTGludXgiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpL3VzZXIvbWFuaXJ2L25vdGVib29rcy9kc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogODAsIiRzY3JlZW5faGVpZ2h0IjogMTA4MCwiJHNjcmVlbl93aWR0aCI6IDE5MjAsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi4zOC4wIiwiJGluc2VydF9pZCI6ICI1dTFydzI3YmEyeGIyNGUwIiwidGltZSI6IDE1OTY3OTMyNTQ2MjMsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJ0b2tlbiI6ICI2YTA0MWJjYjZjMGU2ZTUyNTJmNjcwYzhmNWY1ZGI5ZSJ9fQ=="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(300.00);
		req = [{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596793554627",
			"body": {
				"data": "eyJldmVudCI6ICJhY3RpdmUiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiTGludXgiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpL3VzZXIvbWFuaXJ2L25vdGVib29rcy9kc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogODAsIiRzY3JlZW5faGVpZ2h0IjogMTA4MCwiJHNjcmVlbl93aWR0aCI6IDE5MjAsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi4zOC4wIiwiJGluc2VydF9pZCI6ICI3b3J3OGxmZmhmYmo2aHluIiwidGltZSI6IDE1OTY3OTM1NTQ2MjMsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJ0b2tlbiI6ICI2YTA0MWJjYjZjMGU2ZTUyNTJmNjcwYzhmNWY1ZGI5ZSJ9fQ=="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://log.refactored.ai/log/ping?username=manirv&url=https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Sec-Fetch-Dest": "empty",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(300.00);
		req = [{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596793854627",
			"body": {
				"data": "eyJldmVudCI6ICJhY3RpdmUiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiTGludXgiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpL3VzZXIvbWFuaXJ2L25vdGVib29rcy9kc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogODAsIiRzY3JlZW5faGVpZ2h0IjogMTA4MCwiJHNjcmVlbl93aWR0aCI6IDE5MjAsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi4zOC4wIiwiJGluc2VydF9pZCI6ICJ5amlzZm9ybHI0dzJ0Nnk4IiwidGltZSI6IDE1OTY3OTM4NTQ2MjMsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJ0b2tlbiI6ICI2YTA0MWJjYjZjMGU2ZTUyNTJmNjcwYzhmNWY1ZGI5ZSJ9fQ=="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(300.00);
		req = [{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596794154627",
			"body": {
				"data": "eyJldmVudCI6ICJhY3RpdmUiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiTGludXgiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpL3VzZXIvbWFuaXJ2L25vdGVib29rcy9kc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogODAsIiRzY3JlZW5faGVpZ2h0IjogMTA4MCwiJHNjcmVlbl93aWR0aCI6IDE5MjAsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi4zOC4wIiwiJGluc2VydF9pZCI6ICJyYmI1cTQ1MThqajR6NWowIiwidGltZSI6IDE1OTY3OTQxNTQ2MjMsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJ0b2tlbiI6ICI2YTA0MWJjYjZjMGU2ZTUyNTJmNjcwYzhmNWY1ZGI5ZSJ9fQ=="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://log.refactored.ai/log/ping?username=manirv&url=https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Sec-Fetch-Dest": "empty",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(300.00);
		req = [{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596794454627",
			"body": {
				"data": "eyJldmVudCI6ICJhY3RpdmUiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiTGludXgiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpL3VzZXIvbWFuaXJ2L25vdGVib29rcy9kc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogODAsIiRzY3JlZW5faGVpZ2h0IjogMTA4MCwiJHNjcmVlbl93aWR0aCI6IDE5MjAsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi4zOC4wIiwiJGluc2VydF9pZCI6ICJxcHg1cHU4M2ticmd1cGg0IiwidGltZSI6IDE1OTY3OTQ0NTQ2MjMsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJ0b2tlbiI6ICI2YTA0MWJjYjZjMGU2ZTUyNTJmNjcwYzhmNWY1ZGI5ZSJ9fQ=="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(300.00);
		req = [{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596794754630",
			"body": {
				"data": "eyJldmVudCI6ICJhY3RpdmUiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiTGludXgiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpL3VzZXIvbWFuaXJ2L25vdGVib29rcy9kc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogODAsIiRzY3JlZW5faGVpZ2h0IjogMTA4MCwiJHNjcmVlbl93aWR0aCI6IDE5MjAsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi4zOC4wIiwiJGluc2VydF9pZCI6ICIwY3JsM2ZmbmFxb3dtMWVuIiwidGltZSI6IDE1OTY3OTQ3NTQ2MjMsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJ0b2tlbiI6ICI2YTA0MWJjYjZjMGU2ZTUyNTJmNjcwYzhmNWY1ZGI5ZSJ9fQ=="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://log.refactored.ai/log/ping?username=manirv&url=https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Sec-Fetch-Dest": "empty",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(300.00);
		req = [{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596795054626",
			"body": {
				"data": "eyJldmVudCI6ICJhY3RpdmUiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiTGludXgiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpL3VzZXIvbWFuaXJ2L25vdGVib29rcy9kc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogODAsIiRzY3JlZW5faGVpZ2h0IjogMTA4MCwiJHNjcmVlbl93aWR0aCI6IDE5MjAsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi4zOC4wIiwiJGluc2VydF9pZCI6ICI4MTR5eG50ejRtZHBneG1pIiwidGltZSI6IDE1OTY3OTUwNTQ2MjMsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJ0b2tlbiI6ICI2YTA0MWJjYjZjMGU2ZTUyNTJmNjcwYzhmNWY1ZGI5ZSJ9fQ=="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(300.00);
		req = [{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596795354624",
			"body": {
				"data": "eyJldmVudCI6ICJhY3RpdmUiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiTGludXgiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpL3VzZXIvbWFuaXJ2L25vdGVib29rcy9kc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogODAsIiRzY3JlZW5faGVpZ2h0IjogMTA4MCwiJHNjcmVlbl93aWR0aCI6IDE5MjAsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi4zOC4wIiwiJGluc2VydF9pZCI6ICI2Znp0anlpNDE2OXRlOGRrIiwidGltZSI6IDE1OTY3OTUzNTQ2MjIsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJ0b2tlbiI6ICI2YTA0MWJjYjZjMGU2ZTUyNTJmNjcwYzhmNWY1ZGI5ZSJ9fQ=="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://log.refactored.ai/log/ping?username=manirv&url=https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
			"params": {
				"headers": {
					"Host": "log.refactored.ai",
					"Connection": "keep-alive",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"Sec-Fetch-Dest": "empty",
					"Accept": "*/*",
					"Origin": "https://dsin100days.refactored.ai",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		sleep(300.00);
		req = [{
			"method": "post",
			"url": "https://api-js.mixpanel.com/track/?ip=1&_=1596795654627",
			"body": {
				"data": "eyJldmVudCI6ICJhY3RpdmUiLCJwcm9wZXJ0aWVzIjogeyIkb3MiOiAiTGludXgiLCIkYnJvd3NlciI6ICJDaHJvbWUiLCIkY3VycmVudF91cmwiOiAiaHR0cHM6Ly9kc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpL3VzZXIvbWFuaXJ2L25vdGVib29rcy9kc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCIkYnJvd3Nlcl92ZXJzaW9uIjogODAsIiRzY3JlZW5faGVpZ2h0IjogMTA4MCwiJHNjcmVlbl93aWR0aCI6IDE5MjAsIm1wX2xpYiI6ICJ3ZWIiLCIkbGliX3ZlcnNpb24iOiAiMi4zOC4wIiwiJGluc2VydF9pZCI6ICJzMzhwYzVqN3VoMms4a294IiwidGltZSI6IDE1OTY3OTU2NTQ2MjMsImRpc3RpbmN0X2lkIjogIm1hbmlydiIsIiRkZXZpY2VfaWQiOiAiMTczYzgzZDc5NzA2ZGEtMDI2ZTlhMTgxNDlmMS0zMTdlMGM1ZS0xZmE0MDAtMTczYzgzZDc5NzFhNTYiLCIkdXNlcl9pZCI6ICJtYW5pcnYiLCIkaW5pdGlhbF9yZWZlcnJlciI6ICJodHRwczovL2RzaW4xMDBkYXlzLnJlZmFjdG9yZWQuYWkvaHViL3NwYXduLXBlbmRpbmcvbWFuaXJ2P25leHQ9JTJGaHViJTJGdXNlciUyRm1hbmlydiUyRm5vdGVib29rcyUyRmRzaW4xMDBkYXlzJTJGY29udGVudCUyRjAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzJTJGMDgtQ29tcHV0YXRpb25zX3dpdGhfTnVtcHklMkZudW1weV8yLmlweW5iIiwiJGluaXRpYWxfcmVmZXJyaW5nX2RvbWFpbiI6ICJkc2luMTAwZGF5cy5yZWZhY3RvcmVkLmFpIiwibm90ZWJvb2tfcGF0aCI6ICJkc2luMTAwZGF5cy9jb250ZW50LzAyLVB5dGhvbl9mb3JfRGF0YV9TY2llbnRpc3RzLzA4LUNvbXB1dGF0aW9uc193aXRoX051bXB5L251bXB5XzIuaXB5bmIiLCJ0b2tlbiI6ICI2YTA0MWJjYjZjMGU2ZTUyNTJmNjcwYzhmNWY1ZGI5ZSJ9fQ=="
			},
			"params": {
				"headers": {
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36",
					"content-type": "application/x-www-form-urlencoded",
					"accept": "*/*",
					"origin": "https://dsin100days.refactored.ai",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://dsin100days.refactored.ai/user/manirv/notebooks/dsin100days/content/02-Python_for_Data_Scientists/08-Computations_with_Numpy/numpy_2.ipynb",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}
