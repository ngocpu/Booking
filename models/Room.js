import mongoose from "mongoose";

const Room = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    imgs:{
      type:[String],
    },
    status:{
      type:String,
      require:true,
      default:"Available"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Room", Room);