
const url = 'https://jsonplaceholder.typicode.com/users';

// ilk adım
// fetch(url).then((response)=>{
//     const data = response.json();
//     console.log(data);
// });

// ikinci adımla doğrudan veriye erişiyoruz.

// fetch(url).then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// });


const getUsers = async () => {

    const res = await fetch('users/bidb.json');

    if (res.status !=200){
        throw new Error('Veriye ulaşılamadı.')
    }

     const data  = await res.json();
     return data;
};

getUsers().then((response) => {
    
    console.log(response);
  
}).catch(err=>{

    console.log(err);

});