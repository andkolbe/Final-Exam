import { Request } from 'express'; 
// import { TUsers } from '../db/models';

export interface IPayload {
    userid?: number;
}

export interface ReqUser extends Request { 
    // user?: TUsers & IPayload
}