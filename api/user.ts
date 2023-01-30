import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();


router.get('/', async (req: Request<{}, {}, {}, IQuery>, res: Response) => {
  try {
    const response = await getAllUser(req);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.post('/', async (req: Request<{}, {}, {}, IQuery>, res: Response) => {
  try {
    const response = await createUser(req);
    res.status(201).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const response = await getAllUserById(req.params.id);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const response = await updateUserbyId(req.params.id, req.body.quantity);
    res.status(204).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const response = await deleteUserById(req.params.id, req.body.quantity);
    res.status(204).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

export default router;