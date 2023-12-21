import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
const router = Router();

router.post('/', (req, res) => {
    res.status(StatusCodes.OK).json(req.body);
});

export { router };