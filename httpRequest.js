const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', ()=>{
   // console.log(xhr,xhr.readyState);
    if (xhr.readyState==4 && xhr.status==200){
        console.log(xhr.responseText);
    } else if (xhr.readyState==4) {
        console.log('Veri Getirilemedi');
    }
});

xhr.open('GET', 'https://jsonplaceholder.typicode.com/userss')
xhr.send();

