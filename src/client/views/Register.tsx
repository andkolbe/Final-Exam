import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../utils/api-service';

const Register: React.FC<RegisterProps> = props => {

    const history = useHistory();

    const [] = useState();

    useEffect(() => {}, []);

    return (
        <div>
            <h1 className="text-center">Register</h1>
        </div>
    );
}

interface RegisterProps {}

export default Register;