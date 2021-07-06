/*
Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*/

//surname catch and capitalize

var startSurname = prompt('Inserisci il tuo cognome', 'aAa');

firstLetter = startSurname.charAt(0).toUpperCase();
remain = startSurname.slice(1).toLowerCase();

surname = firstLetter + remain;


//array + user-surname + sort

var surnameList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

surnameList.push(surname);

surnameList.sort();

//list numeration

var stamp = document.getElementById('stamp');
var finalList = '';
for (i = 0; i < surnameList.length; i++) {

    finalList += '<li>' + (i + 1) + ' ' + surnameList[i]
    '</li>';

    console.log(surnameList[i]);
    console.log(i + 1);
}

// stamp + index of surname

var position = surnameList.indexOf(surname);

stamp.innerHTML = finalList + '<li>' + 'Il tuo numero è in posizione : ' + (position + 1) + '</li>';