import { Query } from '../';
import { ICategory } from '../models';

const all = () => Query<ICategory[]>('SELECT * FROM categories');
const one = (id: number) => Query<ICategory[]>('SELECT * FROM categories WHERE id = ?', [id]);

export default {
    all,
    one
}