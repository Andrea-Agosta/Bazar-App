import { addProduct, deleteProductById, getProductById, getProductByTag, getProductByUserId, updateProductById } from '../db/controller/product';
import express from 'express';
import { Request, Response } from 'express';
import { IQueryProduct } from 'type/product';
const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
  try {
    if (req.params.id) {
      const response = await getProductById(req.params.id);
      res.status(200).json(response);
    } else {
      res.status(400).send('Bad request');
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.get('/:Tag/:tagId', async (req: Request, res: Response) => {
  try {
    if (req.params.tagId) {
      const response = await getProductByTag(req.params.tagId);
      res.status(200).json(response);
    } else {
      res.status(400).send('Bad request');
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.get('/user/:id', async (req: Request, res: Response) => {
  try {
    if (req.params.userId) {
      const response = await getProductByUserId(req.params.userId);
      res.status(200).json(response);
    } else {
      res.status(400).send('Bad request');
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.post('/', async (req: Request<{}, {}, {}, IQueryProduct>, res: Response) => {
  try {
    const response = await addProduct(req);
    res.status(201).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.put('/:id', async (req: Request<{ productid: string }, {}, {}, IQueryProduct>, res: Response) => {
  try {
    const response = await updateProductById(req);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    if (req.params.productid) {
      const response = await deleteProductById(req.params.productid);
      res.status(200).json(response);
    } else {
      res.status(400).send('Bad Request');
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

export default router;
