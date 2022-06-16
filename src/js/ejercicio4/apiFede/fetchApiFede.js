fetch('https://ovdev-portfolio.herokuapp.com/api/projects')
.then(response => response.json())
.then(proyectos => console.log(proyectos))
.catch(error => console.log(error));

const data = {
    name: "Plataforma de pago",
    imgUrl: "https://www.freejpg.com.ar/image-900/1d/1de8/F100007892-chispas.jpg",
    description: "Plataforma de pago para comercio",
    projectUrl: "https://www.freejpg.com.ar/free/info/100007892",
};

fetch('https://ovdev-portfolio.herokuapp.com/api/projects', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
})
.then(response => console.log(response))
.catch(error => console.log(error));


const data1 = {
        name: "React" , 
        description: "frameworks", 
        imgUrl: "https://pluspng.com/img-png/react-logo-png-react-logo-png-img-900-900-free-transparent-react-png-900x900.jpg",
        }


fetch('https://ovdev-portfolio.herokuapp.com/api/tecnologies', {
        method: 'POST',
        body: JSON.stringify(data1),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
})
.then(response => console.log(response))
.catch(error => console.log(error));



