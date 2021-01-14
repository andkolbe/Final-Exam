import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../utils/api-service';
import { IBook } from '../utils/types';

const Details: React.FC<DetailsProps> = props => {

    const { id } = useParams<{ id: string }>();

    const history = useHistory();

    const [book, setBook] = useState<IBook>(null);

    useEffect(() => {
        api(`/api/books/${id}`).then(book => setBook(book));
    }, [id]);

    const destroy = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        api(`/api/books/${id}`, 'DELETE');
        history.push('/');
    }

    return (
        <div>
            <h1>{book?.title}</h1>
            <h2>{book?.author}</h2>
            <h3>${book?.price}</h3>
            <h6>{book?.name}</h6>
            <button onClick={() => history.push('/')}>Back to Home</button>
            <button onClick={() => history.push(`/admin/${id}`)}>Edit</button>
            <button onClick={destroy}>Delete</button>
        </div>
    );
}

interface DetailsProps {}

export default Details;