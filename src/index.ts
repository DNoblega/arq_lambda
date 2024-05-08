import { APIGatewayEvent } from "aws-lambda";
import { initializeDatabase } from "./db";
import {z} from 'zod';

export const handler = async (event: APIGatewayEvent) => {
  try {
    //console.log("event", event);
    //get param in event
    //ejemplo de validacion de objeto de la request mediante zod
    const request = z.object({
      atencionId: z.string().transform((val:string)=>val ? parseInt(val) : 0).refine(val:Number => val >= 1),
      userId: z.string()
    }).parse(event.queryStringParameters);

    let response = {
      estado:"OK"
    };
  
    db = await initializeDatabase('secret',db!);

    //example error
    //throw new HttpError(400,"No se encontro la atencion");
  
    return genResponse(200,response);
  }catch (e) {
    let response = {
      estado:"NOK"
    };
    let statusCode = 500;
    if(e instanceof z.ZodError){
      statusCode = 400;
    }else if(e instanceof HttpError){
      statusCode = e.statusCode;
    }
    console.log("error", e);
    return genResponse(statusCode,response);
  }
  
}

class HttpError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}
let db;
let genResponse =(statusCode:number, objResponse:Object)=>{
  return {
    statusCode: statusCode,
    body: JSON.stringify(objResponse),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    }
  };
}