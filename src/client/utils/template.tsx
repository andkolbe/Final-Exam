import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../utils/api-service';

const Template: React.FC<TemplateProps> = props => {

    const history = useHistory();

    const [] = useState();

    useEffect(() => {}, []);

    return (
        <div>
            <h1 className="text-center">Template</h1>
        </div>
    );
}

interface TemplateProps {}

export default Template;