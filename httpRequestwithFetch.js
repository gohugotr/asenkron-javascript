
const url = 'https://jsonplaceholder.typicode.com/users';

// ilk adım
// fetch(url).then((response)=>{
//     const data = response.json();
//     console.log(data);
// });

// ikinci adımla doğrudan veriye erişiyoruz.

fetch(url).then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})