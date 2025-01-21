



const mongoose=require('mongoose')


const connectToDb=async()=>{
    try {
       await  mongoose.connect('mongodb://localhost:27017/Assignment')

       console.log('connected to db success');
       


        
    } catch (error) {
        console.log('error while connecting to db',error);
        
    }
}


module.exports={connectToDb}