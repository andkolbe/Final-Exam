import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api, { TOKEN_KEY } from '../utils/api-service';

const Register: React.FC<RegisterProps> = props => {

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const token = await api('/auth/register', 'POST', {name, email, password})
        localStorage.setItem(TOKEN_KEY, token);
        history.push('/');
    }

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} placeholder='name' type='text'/>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder='email' type='text'/>
            <input value={password} onChange={e => setPassword(e.target.value)} placeholder='password' type='text'/>
            <button onClick={register}>Register</button>
        </div>
    );
}

interface RegisterProps {}

export default Register;