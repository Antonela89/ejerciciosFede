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

request.open('GET', 'https://ovdev-portfolio.herokuapp.com/api/projects');
request.send();





