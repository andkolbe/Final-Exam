import { Request } from 'express'; 
import { TUser } from '../db/models';

export interface IPayload {
    userid?: number;
}

export interface ReqUser extends Request { 
    user?: TUser & IPayload
}