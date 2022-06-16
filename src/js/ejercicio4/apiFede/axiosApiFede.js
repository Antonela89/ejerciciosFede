axios.get('https://ovdev-portfolio.herokuapp.com/api/projects')
.then(proyectos => console.log(proyectos.data))
.catch(error => console.log(error));

const data = {
    name: "Plataforma de pago",
    imgUrl: "https://www.freejpg.com.ar/image-900/1d/1de8/F100007892-chispas.jpg",
    description: "Plataforma de pago para comercio",
    projectUrl: "https://www.freejpg.com.ar/free/info/100007892",
};

axios.post('https://ovdev-portfolio.herokuapp.com/api/projects', data)
.then(response => console.log(response.data))
.catch(error => console.log(error));


const data1 = {
    name: "React" , 
    description: "frameworks", 
    imgUrl: "https://pluspng.com/img-png/react-logo-png-react-logo-png-img-900-900-free-transparent-react-png-900x900.jpg",
    }

    axios.post('https://ovdev-portfolio.herokuapp.com/api/tecnologies', data1)
    .then(response => console.log(response.data1))
    .catch(error => console.log(error));
    
