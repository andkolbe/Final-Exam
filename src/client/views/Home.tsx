import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../utils/api-service';
import { IBook } from '../utils/types';

const Home: React.FC<HomeProps> = props => {

    const history = useHistory();

    const [books, setBooks] = useState<IBook[]>([]);

    useEffect(() => {
        api('/api/books').then(books => setBooks(books));
    }, []);

    return (
        <div>
            {books.map(book => (
                <div key={`book-key-${book.id}`}>
                    <h1>{book.title}</h1>
                    <h2>{book.author}</h2>
                    <h3>${book.price}</h3>
                    <Link to={`/details/${book.id}`}>Learn More!</Link>
                </div>
            ))}
        </div>
    );
}

interface HomeProps {}

export default Home;