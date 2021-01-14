import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../utils/api-service';

const Home: React.FC<HomeProps> = props => {

    const history = useHistory();

    const [] = useState();

    useEffect(() => {}, []);

    return (
        <div>
            <h1 className="text-center">Home</h1>
        </div>
    );
}

interface HomeProps {}

export default Home;