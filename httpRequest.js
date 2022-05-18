const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', ()=>{
   // console.log(xhr,xhr.readyState);
    if (xhr.readyState==4){
        console.log(xhr.responseText);
    }
});

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
xhr.send();

