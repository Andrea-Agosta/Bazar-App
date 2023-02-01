import express from 'express';
import { Request, Response } from 'express';
import { IQueryProduct } from 'type/comment';
const router = express.Router();

router.get('/:idTag', async (req: Request<{}, {}, {}, IQueryProduct>, res: Response) => {
  try {
    const response = await getProductByTag(req.query.tagId);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const response = await getProductById(req.params.id);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const response = await addProduct(req);
    res.status(201).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.patch('/:id', async (req: Request<{}, {}, {}, IQueryProduct>, res: Response) => {
  try {
    const response = await updateProduct(req.query.idRef);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.delete('/:id', async (req: Request<{}, {}, {}, IQueryProduct>, res: Response) => {
  try {
    const response = await deleteProduct(req.query.idRef);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

export default router;
