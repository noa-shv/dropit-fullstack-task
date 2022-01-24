import express from 'express';
const cors = require('cors');
const bodyParser = require('body-parser');

export default (app) => {
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
}
