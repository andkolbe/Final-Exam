import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../utils/api-service';
import { IBook } from '../utils/types';

const Admin: React.FC<AdminProps> = props => {

    const { id } = useParams<{ id: string }>();

    const history = useHistory();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [categoryid, setCategoryid] = useState('');

    const [books, setBooks] = useState<IBook[]>([]);

    useEffect(() => {
        api('/api/books').then(books => setBooks(books));
    }, []);

    useEffect(() => {
        (async () => {
            const book = await api(`/api/books/${id}`)
            setTitle(book.title);
            setAuthor(book.author);
            setPrice(book.price);
            setCategoryid(book.categoryid)
        })()
    }, [id]);

    const edit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        api(`/api/books/${id}`, 'PUT', { title, author, price, categoryid })
        history.push(`/details/${id}`);
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
            <button onClick={() => history.goBack()}>Back to Details</button>
            <button onClick={edit}>Submit Edit</button>
        </div>
    );
}

interface AdminProps {}

export default Admin;