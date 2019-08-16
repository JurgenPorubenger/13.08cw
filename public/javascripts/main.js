console.log("Alive!");
const xhr = new XMLHttpRequest;
xhr.open('POST', 'users/data');
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
xhr.send(JSON.stringify({name: 'Petya'}));
// xhr.addEventListener('load', ()=>{
//     const data = JSON.parse(xhr.response);
//     document.querySelector('#data').innerHTML=data.name;
// });

