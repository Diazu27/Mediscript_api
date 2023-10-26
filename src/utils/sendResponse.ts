import { Response } from "express";

export const sendResponse = (ModelInstance:any, res:Response, Msg:string = 'Suceess', isAuth:boolean = false)=>{
    if (ModelInstance) {
    res.status(200).json({ message: Msg, data: ModelInstance });
    } else {
        if(isAuth){
            res.status(401).json({ status: 404, message: Msg });
        }else{
            res.status(404).json({ status: 404, message: 'Not found data' });
        }
    
    }
    
}