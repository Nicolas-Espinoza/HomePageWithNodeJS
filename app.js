const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000


//hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err) => {
    console.log(err);
    //ver parametro pasado en la consola
    console.log(process.argv);
    //const [ , , arg3] = process.argv;
})


//middleware

//este sirve para retornar archivos staticos
//por defecto este me retorna el index.html de public
app.use(express.static('public'));

//el archivo que quiero que me retorne en caso de que sea otra ruta
//el asterisco indica que es para cualquier ruta no perteneciente

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Nicolas',
        titulo: 'Node y HBS'
    })
})

app.get('/generic', (req, res) => {
    //res.sendFile(__dirname + '/public/generic.html');
    res.render('generic', {
        nombre: 'Nicolas',
        titulo: 'Node y HBS'
    });
})

app.get('/elements', (req, res) => {
    //res.sendFile(__dirname + '/public/elements.html');
    res.render('elements', {
        nombre: 'Nicolas',
        titulo: 'Node y HBS'
    });
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404/index.html');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
