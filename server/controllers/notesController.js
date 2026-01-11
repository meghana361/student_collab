import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Note from "../models/notesModel.js";

// ---------------- ADD NOTE ----------------
export const addNote = async (req, res) => {
  try {
    const { title, subject, semester } = JSON.parse(req.body.note);
    const file = req.file;

    if (!title || !subject || !file) {
      return res.json({
        success: false,
        message: "Missing required fields",
      });
    }

    // Read file from disk
    const fileBuffer = fs.readFileSync(file.path);

    // Upload to ImageKit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: file.originalname,
      folder: "/notes",
    });

    // Optional: delete temp file
    fs.unlink(file.path, () => {});

    await Note.create({
      title,
      subject,
      semester,
      fileUrl: response.url,
      uploadedBy: req.user?.email || "anonymous",
    });

    res.json({
      success: true,
      message: "Notes uploaded successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// ---------------- GET NOTES ----------------
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      notes,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
