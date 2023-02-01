import { addNewComment, deleteCommentById, getAllComments, updateCommentById } from 'db/controller/comment';
import express from 'express';
import { Request, Response } from 'express';
import { IQueryComment } from 'type/comment';
const router = express.Router();


router.get('/', async (req: Request<{}, {}, {}, IQueryComment>, res: Response) => {
  try {
    const response = await getAllComments(req.query.productId);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.post('/', async (req: Request<{ productId: string }, {}, {}, IQueryComment>, res: Response) => {
  try {
    const response = await addNewComment(req);
    res.status(201).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.patch('/:id', async (req: Request<{ commentId: string }, {}, {}, IQueryComment>, res: Response) => {
  try {
    const response = await updateCommentById(req);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    if (req.params.id) {
      const response = await deleteCommentById(req.params.id);
      res.status(200).json(response);
    } else {
      res.status(400).send('Bad request');
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


export default router;
