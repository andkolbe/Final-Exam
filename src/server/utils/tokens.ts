import * as jwt from 'jsonwebtoken';
import type { IPayload } from './types';

export const createToken = (payload: IPayload) => {
    const token = jwt.sign(payload, 'pizza', { expiresIn: '7d' }); 
    return token;
}