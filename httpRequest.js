const getUsers = (url, callback) => {
    const xhr = new XMLHttpRequest()

    xhr.addEventListener('readystatechange', () => {
      // console.log(xhr,xhr.readyState);
      if (xhr.readyState == 4 && xhr.status == 200) {
        //console.log(xhr.responseText)
        const data = JSON.parse(xhr.responseText); // Veriler JSON olarak döndürüldü.
        callback(undefined, data);
        // Standart kullanım ilk paramtre hata, 2. parametrede doğru verinin paramtresi şeklinde
            // İlk parametre burada hata olmayacağından 'undefined' oluyor.
            // 2. parametrede de veri içeren 'xhr.responseText' oluyor.
      } else if (xhr.readyState == 4) {
        //console.log('Veri erişilemedi');
        callback('Veriye erişilemedi', undefined);
            // İlk parametre burada hata olacağından hata mesajı 'Veriye erişilemedi' görüntülenir.
            // 2. parametrede de veri olmadığından 'undefined' girilir.
      }
    })

    xhr.open('GET', url);
    xhr.send();
}

const url = 'https://jsonplaceholder.typicode.com/users';

getUsers(url, (err,data)=>{
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});