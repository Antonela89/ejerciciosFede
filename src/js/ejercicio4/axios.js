axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(bitcoins =>console.log(bitcoins.data))
.catch(err => console.log(err));

function llamarName(name) {
axios.get(`https://api.nationalize.io?name=${name}`)
    .then(name => console.log(name.data))
    .catch(error => console.log(error));
}

llamarName('Elida');
llamarName('Raul');
llamarName('Giuliana');
