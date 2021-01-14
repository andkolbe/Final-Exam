import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
    try {
        res.json('TEST login');
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Bad Code', error: error.message })
    }
})

export default router;