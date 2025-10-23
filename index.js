//TODO Snack 1
//Ottieni il titolo di un post con una Promise.

//* Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
/* 🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post.
 Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}. */

//*SNACK 1 base solution
// function getPost(id){
//     return new Promise((resolve, reject)=>{
//         fetch(`https://dummyjson.com/posts/${id}`)
//         .then((res)=>res.json())
//         .then((post)=>{
//             resolve(post)
//         })
//         .catch(reject)
//     })
// }

// getPost(1)
//   .then((post) => console.log("Post:", post))
//   .catch((error) => console.error || error);

//*SNACK 1 with bonus solution
function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((post) => {
        fetch(`https://dummyjson.com/users/${post.userId}`)
          .then((res) => res.json())
          .then((user) => {
            const result = { ...post, user };
            resolve(result);
          });
      })
      .catch(reject);
  });
}

getPost(1)
  .then((post) => console.log("Post completo:", post))
  .catch((error) => console.error || error);

//TODO Snack 2
//* Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
/* 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato.
 Se il numero esce due volte di fila, stampa "Incredibile!". */
