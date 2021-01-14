import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api, { TOKEN_KEY } from '../utils/api-service';

const Login: React.FC<LoginProps> = props => {

    const history = useHistory();

    const [email, setEmail] = useState('andrew@andrew.com');
    const [password, setPassword] = useState('password123');

    const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const token = await api('/auth/login', 'POST', {email, password})
        localStorage.setItem(TOKEN_KEY, token);
        history.push('/');
    }

    return (
        <div>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder='email' type='text'/>
            <input value={password} onChange={e => setPassword(e.target.value)} placeholder='password' type='text'/>
            <button onClick={login}>Login</button>
        </div>
    );
}

interface LoginProps {}

export default Login;