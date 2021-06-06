import express from 'express';
import './db/mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import workManualRouter from './routers/workManualRouter.js';
import employerRouter from './routers/employerRouter';
import employeeRouter from './routers/employeeRouter';
import locationRouter from './routers/locationRouter';
import categoryRouter from './routers/categoryRouter';
import showUser from './routers/showUserRouter';
import ping from './routers/ping';

dotenv.config('./config/env');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/ping', ping);

app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/location', locationRouter);
app.use('/api/v1/owner', employerRouter);
app.use('/api/v1/employee', employeeRouter);
app.use('/api/v1/showUser', showUser);

module.exports = app;
