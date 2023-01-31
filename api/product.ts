import express from 'express';
import { Request, Response } from 'express';
import { IQueryProduct } from 'type';
const router = express.Router();

router.get('/:tag', async (req: Request<{}, {}, {}, IQueryProduct>, res: Response) => {
  try {
    const response = await getProductByTag(req.query.tag);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.get('/:id', async (req: Request<{}, {}, {}, IQueryProduct>, res: Response) => {
  try {
    const response = await getProductById(req.query.idRef);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const response = await addProduct(req);
    res.status(200).json(response);
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
