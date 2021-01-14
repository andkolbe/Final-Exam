import { Query } from '../';
import { CannedResponse, IUser } from '../models';

const all = () => Query<IUser[]>('SELECT * FROM users');
const one = (id: number) => Query<IUser[]>('SELECT * FROM users WHERE id = ?', [id]);
const insert = (newUser: any) => Query<CannedResponse>('INSERT INTO users SET ?', newUser);
const find = (column: string, value: string | number) => Query<IUser[]>('SELECT * FROM books SET ?? = ?', [column, value]);

export default {
    all,
    one,
    insert,
    find
}