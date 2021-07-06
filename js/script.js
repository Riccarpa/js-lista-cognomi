/*
Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*/

//surname catch

var surname = prompt('Inserisci il tuo cognome', 'aaa');

//array + user-surname

var surnameList = ['bianchi', 'neri', 'rossi', 'verdi', 'gialli'];

surnameList.push(surname);

//stampa in ordine alfabetico

var stamp = document.getElementById('stamp');
var finalList = '';
for (i = 0; i < surnameList.length; i++) {

    finalList += '<li>' + (i + 1) + ' ' + surnameList[i]
    '</li>';

    console.log(surnameList[i]);
    console.log(i + 1);
}


// stamp

stamp.innerHTML = finalList;