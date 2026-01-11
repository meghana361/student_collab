import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
  {
    title: String,
    subject: String,
    semester: String,
    fileUrl: String,
    uploadedBy: String,
  },
  { timestamps: true }
);

export default mongoose.model("Note", notesSchema);
