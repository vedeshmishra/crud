import studentModel from '../models/studentModel.js';
import multer from 'multer';
class Student{
    static getAllDoc = async(req, res) => {
        try {
             const data =   await studentModel.find();  
            res.render('index', { data: data });
        
            } catch (error) {
                console.log(error);
            }
      
    };

    static createDoc = async(req, res) => {
        try {
           
            const data = await studentModel.create(req.body);  
            res.redirect('/');
                } catch (error) {
                    console.log(error);
                    
                }
        
    }
    static editDoc = async(req, res) => {
        try {
                const data = await studentModel.findById(req.params.id);
               // console.log(data);
                res.render('edit', {data});
            } catch (error) {
                console.log(error);
            }
    }

    static updateDocById = async(req, res) => {
 
        try {
            var storage = multer.diskStorage({
                destination: function (req, file, cb) {
                    cb(null, 'public/images/')
                },
                filename: function (req, file, cb) {
                 let filaname = file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1];
                    cb(null, filaname)
                     
                }
            }); 

            var upload = multer({ storage: storage }).single('image');
            upload(req, res, async function (err) {
                if (err instanceof multer.MulterError) {
                    return res.status(500).json(err)
                } else if (err) {
                    return res.status(500).json(err)
                } 
                req.body.image= req.file.filename ;
               
                const data = await studentModel.findByIdAndUpdate(req.params.id, req.body);
            });

         
            
 

            res.redirect('/');
        } catch (error) {
            console.log(error);
        }

    }

    static deleteDoc = async(req, res) => { 
      try {
          await studentModel.findByIdAndRemove(req.params.id ); 
         res.redirect('/');
      } catch (error) {
            console.log(error);
      }
    }

    
    
}

export default Student;
 