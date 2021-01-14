import * as mysql from 'mysql';
import books from './queries/books';
import categories from './queries/categories';
import users from './queries/users';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'bookstore',
    password: 'bookstore',
    database: 'bookstore'
})

export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        const sql = mysql.format(query, values);
        //console.log(sql);
        pool.query(sql, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

export default {
    books,
    categories,
    users
}