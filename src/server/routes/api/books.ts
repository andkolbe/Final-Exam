import { Router } from 'express';
import db from '../../db';
import * as passport from 'passport';

const router = Router();

router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const [book] = await db.books.one(id);
            res.json(book);
        } else {
            const books = await db.books.all();
            res.json(books);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Bad Code', error: error.message })
    }
})

router.post('/', passport.authorize('jwt') , async (req, res) => {
    const booksDTO = req.body;
    try {
        const result = await db.books.insert(booksDTO);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Bad Code', error: error.message })
    }
})

router.put('/:id', passport.authorize('jwt'), async (req, res) => {
    const id = Number(req.params.id);
    const booksDTO = req.body;
    try {
        const result = await db.books.update(id, booksDTO);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Bad Code', error: error.message })
    }
})

router.delete('/:id', passport.authorize('jwt'), async (req, res) => {
    const id = Number(req.params.id);
    try {
        const result = await db.books.destroy(id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Bad Code', error: error.message })
    }
})

export default router;