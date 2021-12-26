import mongoose, { ConnectOptions } from "mongoose";

const connecting = async (): Promise<void> => {
  try {
    const uri: string = process.env.MONGODB_URI as string;

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log("Connected to success!");
  } catch (error) {
    console.log("Errors connecting database");
  }
};

const disconnect = async (): Promise<void> => {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from success!");
  } catch (error) {
    console.log("Errors disconnecting database");
  }
};

export { connecting, disconnect };
