import { Query } from '../';
import { TCategory } from '../models';

const all = () => Query<TCategory[]>('SELECT * FROM categories');
const one = (id: number) => Query<TCategory[]>('SELECT * FROM categories WHERE id = ?', [id]);

export default {
    all,
    one
}