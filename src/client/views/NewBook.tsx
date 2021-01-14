import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../utils/api-service';

const NewBook: React.FC<NewBookProps> = props => {

    const history = useHistory();

    const [] = useState();

    useEffect(() => {}, []);

    return (
        <div>
            <h1 className="text-center">NewBook</h1>
        </div>
    );
}

interface NewBookProps {}

export default NewBook;