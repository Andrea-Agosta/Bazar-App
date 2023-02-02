import { addNewHistory, getAllHistoryByProductId, getAllHistoryByUserId } from '../db/controller/history';
import express from 'express';
import { Request, Response } from 'express';
import { IQueryHistory } from 'type/history';
const router = express.Router();


router.get('/product/:id', async (req: Request, res: Response) => {
  try {
    if (req.params.id) {
      const response = await getAllHistoryByProductId(req.params.id);
      res.status(200).json(response);
    }
    res.status(400).send('Bad Request');
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.get('/product/user/:id', async (req: Request, res: Response) => {
  try {
    if (req.params.id) {
      const response = await getAllHistoryByUserId(req.params.id);
      res.status(200).json(response);
    } else {
      res.status(400).send('Bad Request');
    }
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
