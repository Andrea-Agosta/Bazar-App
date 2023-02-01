import { addNewHistory, getAllHistory } from 'db/controller/history';
import express from 'express';
import { Request, Response } from 'express';
import { IQueryHistory } from 'type/history';
const router = express.Router();


router.get('/', async (_req: Request, res: Response) => {
  try {
    const response = await getAllHistory();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.post('/', async (req: Request<{ productId: string }, {}, {}, IQueryHistory>, res: Response) => {
  try {
    const response = await addNewHistory(req);
    res.status(201).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


export default router;
