import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/router';
import cors from 'cors';
import dotenv from 'dotenv';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.dev';
import zip from 'express-zip';

// Create express app
const app = express();

// Set up webpack
const compiler = webpack(config);

// Configure dotenv
dotenv.config();

// Enable cors
app.use(cors('*'));

// DEVONLY: Set up dev-middleware
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

// DEVONLY: Set up HMR
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Public directory for static files
app.use('/', express.static(path.join(__dirname, '../client')));

// Router
app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(`Listening on port : ${PORT}`); });