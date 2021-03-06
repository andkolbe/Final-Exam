import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';
import * as JWTStrategy from 'passport-jwt';
import db from '../db';
import { comparePasswordToHash } from '../utils/passwords';
import { IPayload } from '../utils/types';


passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))


passport.use(new LocalStrategy.Strategy({ 
    usernameField: 'email' 
}, async (email, password, done) => { 
    
    try { 
         const [user] = await db.users.find('email', email);
        
        if (user && comparePasswordToHash(password, user.password)) {
            
            delete user.password 
            done(null, user); 
           
        } else {
            done(null, false); 
        }
    } catch (error) {
        console.log(error);
        done(error);
    }
}))


passport.use(new JWTStrategy.Strategy({ 
    jwtFromRequest: JWTStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'pizza' 
}, (payload: IPayload, done) => {
    done(null, payload); 
}))