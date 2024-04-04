import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true, //limpia espacios
    },
    email: {
      type: String,
      required: true,
      unique: true, //recordar agregar para emails
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // permite ver fecha de creacion y actualizacion
    //createdAt y updatedAt
  }
);

export default mongoose.model("User", userSchema);
//export default mongoose.model("DEFINE NOMBRE DEL MODELO", userSchema);
