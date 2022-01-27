import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

export default (app) => {
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    app.use(morgan('dev'));
}
