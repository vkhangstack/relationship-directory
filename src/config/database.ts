import { connect, ConnectOptions } from "mongoose";

const connecting = (): void => {
  try {
    const uri: string = process.env.MONGO_URI as string;

    connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log("Connected to success!");
  } catch (error) {
    console.log("Errors connecting database");
  }
};

export { connecting };
