import * as dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import { Application } from 'express';
import bodyParser from 'body-parser';
import user from 'api/user';
import product from 'api/product';
import tag from 'api/tag';
import history from 'api/history';
import comment from 'api/comment';
import message from 'api/message';


const app: Application = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/user', user);
app.use('/api/product', product);
app.use('/api/tag', tag);
app.use('/api/history', history);
app.use('/api/comment', comment);
app.use('/api/message', message);

export default app;