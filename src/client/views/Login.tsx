import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../utils/api-service';

const Login: React.FC<LoginProps> = props => {

    const history = useHistory();

    const [] = useState();

    useEffect(() => {}, []);

    return (
        <div>
            <h1 className="text-center">Login</h1>
        </div>
    );
}

interface LoginProps {}

export default Login;