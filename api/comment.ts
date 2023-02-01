import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();


router.get('/', async (_req: Request, res: Response) => {
  try {
    const response = await getAllComments();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.get('/id', async (req: Request, res: Response) => {
  try {
    const response = await getCommentById(req.params.id);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.post('/', async (req: Request<{}, {}, {}, IQueryProduct>, res: Response) => {
  try {
    const response = await addNewComment(req);
    res.status(201).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.patch('/', async (req: Request, res: Response) => {
  try {
    const response = await updateCommentById(req.params.id);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.delete('/', async (req: Request, res: Response) => {
  try {
    const response = await deleteCommentById(req.params.id);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


export default router;
