import { Query } from '../';
import { CannedResponse, IBook } from '../models';

const all = () => Query<IBook[]>('SELECT books.*, categories.name FROM books JOIN categories ON categories.id = books.categoryid');
const one = (id: number) => Query<IBook[]>('SELECT books.*, categories.name FROM books JOIN categories ON categories.id = books.categoryid WHERE books.id = ?', [id]);
const insert = (newBook: any) => Query<CannedResponse>('INSERT INTO books SET ?', newBook);
const update = (id: number, editedBook: any) => Query<CannedResponse>('UPDATE books SET ? WHERE id = ?', [editedBook, id]);
const destroy = (id: number) => Query<CannedResponse>('DELETE FROM books WHERE id = ?', [id]);


export default {
    all,
    one,
    insert,
    update,
    destroy
}