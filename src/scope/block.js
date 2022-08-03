function fruits() {

    if (true) {
        var fruit1 = 'Manzana'; //function scope
        let fruit2 = 'Naranja'; // block scope
        const fruit3 = 'Plátano'; // block scope
        console.log(fruit2);
        console.log(fruit3);
    }

    console.log(fruit1);

}

fruits();