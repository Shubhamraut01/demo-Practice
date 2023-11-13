import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    speciality: {
      type: String,
      required: true,
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
    salary: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: true,
    },
    expirenceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
  },
  { timestamp: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
