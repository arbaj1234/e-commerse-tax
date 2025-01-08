import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import connectDB from './config/connectDB.js'
import morgan from 'morgan';
import recommendationRouter from './routes/recommendation.route.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';

const app=express();

const PORT=process.env.PORT || 5050
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/recommendation' , recommendationRouter)

await connectDB();

app.listen(PORT,()=>{
console.log(`server runnimg on PORT ${PORT}`);
})