import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const infoSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    phone: {
      type: Number,
      required: true,
    },
    birthday: {
      type: Date,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    bank: {
      type: Number,
      required: false,
    },
    socialMedia: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export = mongoose.model("Users", infoSchema);
