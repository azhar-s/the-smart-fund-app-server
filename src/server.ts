import App from './app'

const app = new App({
    port: 3035,
    controllers: [],
    middleware: [],
});

app.listen();