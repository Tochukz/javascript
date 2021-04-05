const { fromEvent, ajax, fetch } = rxjs;

const btnClicked$ = fromEvent(document.getElementById('clickBtn'), 'click');
btnClicked$.subscribe(e => console.log('event', e));

const categories$ = ajax.ajax('http://ojlinks-api.test:8084/api/categories');
categories$.subscribe(ajaxResponse => {
  console.log('ajaxResponse', ajaxResponse);
  if (ajaxResponse.status == 200) {
    const categories = ajaxResponse.response;
    console.log('categories', categories);
  }
});

const subcategories$ = ajax.ajax.getJSON('http://ojlinks-api.test:8084/api/subcategories');
subcategories$.subscribe(response => {
  console.log('subcategories', response);
});

const login$ = ajax.ajax.post('http://ojlinks-api.test:8084/admin/login', {username: 'chucks'}, {'Authorization': 'Bearer efake.useless-token'});
login$.subscribe(ajaxResponse => {
  if (ajaxResponse.status == 200) {
    const result = ajaxResponse.response;
    console.log('token', result);
  }
});

/**Not working at the moment */
const category$ = fetch.fromFetch('http://ojlinks-api.test:8084/api/categories/1');
// category$.subscribe(response => {
//   console.log('response', response);
// });

// console.log('rxjs', rxjs);
// console.log('ajax', ajax);
// console.log('fetch', fetch);
