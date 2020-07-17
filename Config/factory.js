import * as Controller from '../Controller/index.js';
import * as Operation from '../Operation/index.js';
import * as Api from '../API/index.js';

const weatherApi = new Api.WeatherApi();
const weatherOeraton = new Operation.WeatherOperation(weatherApi);
const weatherController = new Controller.WeatherController(weatherOeraton);


export{
    weatherController
}