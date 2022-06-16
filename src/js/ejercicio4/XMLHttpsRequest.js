const request = new XMLHttpRequest;

request.addEventListener('load', (e) => {
    let response;

    if(request.status === 200) {
        response = request.response;
        } else {
            response =request.status;
        }
        console.log(JSON.parse(response));
});

request.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
request.send();



function llamarNombre(nombre){
    const request1 = new XMLHttpRequest;

    request1.addEventListener('load', (e) => {
        let response;

        if(request1.status === 200) {
            response = request1.response;
            } else {
                response =request1.status;
            }
            console.log(JSON.parse(response));
    });

    request1.open('GET',`https://api.nationalize.io?name= ${nombre}`);
    request1.send();
}

llamarNombre('Antonela');
llamarNombre('Federico');
llamarNombre('Evelyn');