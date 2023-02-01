import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();


router.get('/', async (_req: Request, res: Response) => {
  try {
    const response = await getAllMessage();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.post('/', async (req: Request<{}, {}, {}, IQueryProduct>, res: Response) => {
  try {
    const response = await addNewMessage(req);
    res.status(201).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


export default router;
