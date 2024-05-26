import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    return console.log('already connected');
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL!, {
      dbName: 'Stackoverflow clone',
    });

    isConnected = true;
  } catch (error) {
    console.log('something went wrong', error);
  }
};
