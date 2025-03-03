import express from 'express';
import { addTransactionController, deleteTransactionController, getAllTransactionController, updateTransactionController, getIndividualTransactionController } from '../controllers/transactionController.js';

const router = express.Router();

router.route("/addTransaction").post(addTransactionController);

router.route("/getTransaction").post(getAllTransactionController);

router.route("/getTransaction/:id").post(getIndividualTransactionController);

router.route("/deleteTransaction/:id").post(deleteTransactionController);

router.route('/updateTransaction/:id').put(updateTransactionController);

export default router;