import express from 'express';
import config from './config/express';
import applyServices from './models';

const app = express();
config(app);
applyServices(app);
const port = 8080;

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
