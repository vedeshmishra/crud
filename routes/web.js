import express from 'express';
import Student from '../controllers/Student.js';
const router = express.Router(); 

router.get('/', Student.getAllDoc);
router.post('/', Student.createDoc);
router.get('/edit/:id', Student.editDoc);
router.post('/update/:id', Student.updateDocById);
router.get('/delete/:id', Student.deleteDoc);
export default router;