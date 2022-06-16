fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(res => res.json() )
    .then(bitcoins => console.log(bitcoins))
    .catch(error => console.log(error));


function llamarNombre(nombre) {
    fetch(`https://api.nationalize.io?name=${nombre}`)
    .then(response => response.json())
    .then(nombre => console.log(nombre))
    .catch(error => console.log(error));
}

llamarNombre('Arya');
llamarNombre('Diana');
llamarNombre('Carlos');
