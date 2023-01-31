import express from 'express';
import { Request, Response } from 'express';
import { IQueryUser } from 'type';
const router = express.Router();


router.get('/:id', async (req: Request<{}, {}, {}, IQueryUser>, res: Response) => {
  try {
    const response = await getUserById(req.query.idRef);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.post('/', async (req: Request<{}, {}, {}, IQueryUser>, res: Response) => {
  try {
    const response = await createUser(req);
    res.status(201).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const response = await updateUserbyId(req);
    res.status(204).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const response = await deleteUserById(req.params.idRef);
    res.status(204).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

export default router;