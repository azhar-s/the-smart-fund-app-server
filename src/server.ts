import App from './app';

import HomeController from './controllers/home.controllers'

const app = new App({
    port: 3035,
    controllers: [
        new HomeController(),
    ],
    middleware: [],
});

app.listen();