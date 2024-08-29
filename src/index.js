import './vendor';
import css from './style.scss';
import _ from 'lodash';
const run = require('./app/app.js');
const AlertService = require('./app/alert.service.js');
const CalculatorService = require('./app/calculator.service.js');
const JokesService = require('./app/jokes.service');

// import { run } from './app/app.js';
// import { AlertService } from './app/alert.service.js';
// import { CalculatorService } from './app/calculator.service.js';
// import { JokesService } from './app/jokes.service';

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);
console.log(_.toUpper('hello from index.js'));