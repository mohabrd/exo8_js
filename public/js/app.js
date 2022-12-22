// en js crée une variable de type array et insère dedans des noms de la classe et ensuite à l'aide d'une boucle for, dit 'bonjour'+ noms à chaque personnes du tableau

// let array = ['Quentin','Bachir','Sebastien','Brandon','Charlotte','Denis','Yassine']

// for (let index = 0; index < array.length; index++) {
//     console.log("Bonjour " + '' + array[index]);
    
// }

// en js dans un prompt insere un nombre et à l'aide d'une boucle for, affiche les nombres de 0 jusqu'au nombre que vous avez choisi

// let nbr = prompt("Choisis un nombre jusqu'où est ce que le compteur s'arrêtera");
// nbr = parseInt(nbr);
// for (let index = 0; index <= nbr; index++) {
//     console.log(index);
    
// }

// en js crée une variable de type array et insère des personnes de la classe ensuite à l'aide d'une boucle foreach, dit 'bonjour' + noms

let array = ['Quentin','Bachir','Sebastien','Brandon','Charlotte','Denis','Yassine'];


array.forEach(function(array){
    console.log('bonjour ' + array);
});