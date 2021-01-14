import { Query } from '../';
import { CannedResponse, TUser } from '../models';

const all = () => Query<TUser[]>('SELECT * FROM users');
const one = (id: number) => Query<TUser[]>('SELECT * FROM users WHERE id = ?', [id]);
const insert = (newUser: any) => Query<CannedResponse>('INSERT INTO users SET ?', newUser);
const find = (column: string, value: string | number) => Query<TUser[]>('SELECT * FROM users WHERE ?? = ?', [column, value]);

export default {
    all,
    one,
    insert,
    find
}