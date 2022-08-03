function greeting() {
    let userName = 'Claudio';
    console.log(userName);

    if (userName === 'Claudio') {
        console.log(`Hello ${userName}!`);
    }

}

greeting(); // se puede acceder a la variable y sus functiones interiores
console.log(userName); // no se pudo acceder porque está fuera del global scope