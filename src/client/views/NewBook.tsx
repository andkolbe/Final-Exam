import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../utils/api-service';
import { IBook } from '../utils/types';

const NewBook: React.FC<NewBookProps> = props => {

    const history = useHistory();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [categoryid, setCategoryid] = useState('');

    const [books, setBooks] = useState<IBook[]>([]);

    useEffect(() => {
        api('/api/books').then(books => setBooks(books));
    }, []);

    const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        api('/api/books', 'POST', { title, author, price, categoryid })
        history.push('/');
    }

    return (
        <div>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder='title' type='text'/>
            <input value={author} onChange={e => setAuthor(e.target.value)} placeholder='author' type='text'/>
            <input value={price} onChange={e => setPrice(e.target.value)} placeholder='price' type='number'/>
            <select value={categoryid} onChange={e => setCategoryid(e.target.value)}>
                <option value='0'>Select A Category...</option>
                {books.map(book => (
                    <option key={`key-${book.id}`} value={book.categoryid}>{book.name}</option>
                ))}
            </select>
            <button onClick={submit}>Submit</button>
        </div>
    );
}

interface NewBookProps {}

export default NewBook;