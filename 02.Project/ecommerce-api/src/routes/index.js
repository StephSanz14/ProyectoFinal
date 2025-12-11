import express from 'express';

import authRoutes from './authRoutes.js';
import cartRoutes from './cartRoutes.js';
import categoryRoutes from './categoryRoutes.js';
import notificationRoutes from './notificationRoutes.js';
import orderRoutes from './orderRoutes.js';
import paymentMethodRoutes from './paymentMethodRoutes.js'; 
import productRoutes from './productRoutes.js';
import userRoutes from './userRoutes.js';
import wishListRoutes from './wishListRoutes.js';
import shippingAddressRoutes from './shippingAddressRoutes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/shipping-address', shippingAddressRoutes);
router.use(cartRoutes);
/* router.use('/wishlist',wishListRoutes); */
router.use('/wishlist', (req, res, next) => {
  console.log('>>> PASANDO POR /wishlist EN INDEX:', req.method, req.url);
  next();
}, wishListRoutes);
router.use(categoryRoutes);
router.use(notificationRoutes);
router.use(orderRoutes);
router.use(paymentMethodRoutes);
router.use(productRoutes); 


export default router;