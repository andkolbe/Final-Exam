import { Router } from 'express';
import db from '../../db';

const router = Router();

router.post('/', async (req, res) => {
    try {
        res.json('TEST cat');
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Bad Code', error: error.message })
    }
})

export default router;