import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
    .connect('mongodb+srv://admin:wwwwww@cluster0.edyrtoe.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));



const app = express();

app.use(express.json());

app.get('/', (req,res) => {

    res.send('Hellow World!');
});

app.post('/auth/login', (req,res)=>{
    console.log(req.body);
const token = jwt.sign({
    email:req.body.email,
    fullName: 'Вася Пупкин',
},
'secret123',
);
    res.json({
        seccess:true,
        token,
    });
});

app.listen(4444, (err) =>{
    if(err) {
        return console.log(err);
    }

    console.log('Server OK');
});
