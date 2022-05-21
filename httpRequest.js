const veriGetir = () => {
  return new Promise((resolve, reject) => {
    // resolve('Veri başarıyla getirildi');
    // Veri başarıyla getirildiyse reject çalışmaz.
    reject('Veri hatası')
    // Veri hatalı geldiyse, burası çalışır.
  })
}

veriGetir()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })

// const getUsers = (url, callback) => {
//     const xhr = new XMLHttpRequest()

//     xhr.addEventListener('readystatechange', () => {
//       // console.log(xhr,xhr.readyState);
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         //console.log(xhr.responseText)
//         const data = JSON.parse(xhr.responseText); // Veriler JSON olarak döndürüldü.
//         callback(undefined, data);
//         // Standart kullanım ilk parametre hata, 2. parametrede doğru verinin parametresi şeklinde
//             // İlk parametre burada hata olmayacağından 'undefined' oluyor.
//             // 2. parametrede de veri içeren 'xhr.responseText' oluyor.
//       } else if (xhr.readyState == 4) {
//         //console.log('Veri erişilemedi');
//         callback('Veriye erişilemedi', undefined);
//             // İlk parametre burada hata olacağından hata mesajı 'Veriye erişilemedi' görüntülenir.
//             // 2. parametrede de veri olmadığından 'undefined' girilir.
//       }
//     })

//     xhr.open('GET', url)
//     xhr.send();
// }

// const url = 'https://jsonplaceholder.typicode.com/users'

// getUsers('users/bidb.json',(err,data)=>{
//     if(err){
//         console.log(err);
//     } else {

//         console.log('bidb.json verileri:/n', data);

//         getUsers('users/muhasebe.json', (err, data) => {
//           if (err) {
//             console.log(err)
//           } else {
//             console.log('muhasebe.json verileri:/n', data);
//             getUsers(url, (err, data) => {
//               if (err) {
//                 console.log(err)
//               } else {
//                 console.log('json placeholder sitesi users verileri:/n', data);
//               }
//             })
//           }
//         })
//     }
// });
