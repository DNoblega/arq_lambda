import { APIGatewayEvent } from "aws-lambda";
import { SecretsManager } from 'aws-sdk';
import { initializeDatabase } from "./db";
import { Atencion } from "./Atencion";
const SM = new SecretsManager


export const handler = async (event: APIGatewayEvent) => {
  //console.log("event", event);
  //get param in event
  try {
  
  

    return {
      statusCode: 200,
      body: JSON.stringify(""),
    };
  }catch (error) {
    console.log("error", error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
}