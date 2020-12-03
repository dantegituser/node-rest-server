require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then((resp) => { console.log('Connectado a Mongo!!'); })
    .catch((error) => { console.log('Error connectando a Mongo', error); });

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto 3000');
});