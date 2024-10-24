import mongoose from "mongoose";


// export default  async function connectDB(){
        
//       try {
//          const connect = await mongoose.connect('mongodb://username:password@172.18.0.2/?authSource=admin');
//          console.log('Mongodb is connected',connect.connection.host)
//       } catch (error) {
//          console.log("error",error);
//          process.exit(1);
//       }

// }


export default async function connectDB()  {
  try {
    await mongoose.connect('mongodb://username:password@172.18.0.2/?authSource=admin');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

connectDB();
