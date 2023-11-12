import express from 'express';
import { Application } from 'express';

class App{
    public app: Application;
    public port:number;

    constructor(appInit:{port:number; middleware:any; controllers: any}){
        this.app=express();
        this.port=appInit.port;
        this.routes(appInit.controllers);
    }

    public listen(){
        this.app.listen(this.port, ()=>{
            console.log('server started');
        })
    }

    private routes(controllers){
        controllers.forEach(controller=>{
            this.app.use(controller.path, controller.router);
        });
    }

}

export default App;