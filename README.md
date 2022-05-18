`REACT-APOLLO ve GRAPHQL ile Uygulamalar Geliştirelim [2021]`

## Asenkron Javascript

### Callback fonksiyonu

`Fonksiyon içerisinde parametre olarak gönderilen fonksiyonlara callback fonksiyonlar denir.`

```js script
const getUsers = (callback) => {
    const xhr = new XMLHttpRequest()

    xhr.addEventListener('readystatechange', () => {
      // console.log(xhr,xhr.readyState);
      if (xhr.readyState == 4 && xhr.status == 200) {
        //console.log(xhr.responseText)
        callback(undefined, xhr.responseText)
        // Standart kullanım ilk paramtre hata, 2. parametrede doğru verinin paramtresi şeklinde
            // İlk parametre burada hata olmayacağından 'undefined' oluyor.
            // 2. parametrede de veri içeren 'xhr.responseText' oluyor.
      } else if (xhr.readyState == 4) {
        //console.log('Veri erişilemedi');
        callback('Veriye erişilemedi', undefined)
            // İlk parametre burada hata olacağından hata mesajı 'Veriye erişilemedi' görüntülenir.
            // 2. parametrede de veri olmadığından 'undefined' girilir.
      }
    })

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send();
}

getUsers((err,data)=>{
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});
```

```js script
    // Veriler JSON olarak döndürüldü.
    const data = JSON.parse(xhr.responseText); 
    callback(undefined, data);
```
