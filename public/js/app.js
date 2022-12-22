// en js crée une variable de type array et insère dedans des noms de la classe et ensuite à l'aide d'une boucle for, dit 'bonjour'+ noms à chaque personnes du tableau

let array = ['Quentin','Bachir','Sebastien','Brandon','Charlotte','Denis','Yassine']

for (let index = 0; index < array.length; index++) {
    console.log("Bonjour " + '' + array[index]);
    
}