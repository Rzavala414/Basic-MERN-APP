const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const router = require('./routes/api.js');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(morgan('tiny'));
app.use('/api', router);

const MONGODB_URI = '';

mongoose.connect(MONGODB_URI || 'mongodb://localhost/mern_youtube', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('mongoose is connected'))
    .catch(() => console.log('db is not connected'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

app.listen(PORT, () => console.log(`port live on ${PORT}`))