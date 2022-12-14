/* eslint-disable no-console */
import express, { json, urlencoded } from 'express';

import cors from 'cors';
import path from 'path';
import categories from './category/router';
import statistics from './statistics/router';
import users from './users/router';

const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public/build')));
const publicPath = path.resolve(__dirname, '../public');

// if query not starts with '/api/' string - send file from public
app.use(/^(?!\/api\/)/, express.static(publicPath));

app.use('/api/categories', categories);
app.use('/api/categories/update', categories);
app.use('/api/statistics', statistics);

app.use('/api/login', users);

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
