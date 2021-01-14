import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const [category] = await db.categories.one(id);
            res.json(category);
        } else {
            const categories = await db.categories.all();
            res.json(categories);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Bad Code', error: error.message })
    }
})

export default router;