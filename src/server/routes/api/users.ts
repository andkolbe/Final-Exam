import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const [user] = await db.users.one(id);
            res.json(user);
        } else {
            const users = await db.users.all();
            res.json(users);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Bad Code', error: error.message })
    }
})

export default router;