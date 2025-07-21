import Note from "../models/Notes.js";

export const getNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user._id }).sort("-updatedAt");
  res.json(notes);
};

export const createNote = async (req, res) => {
  const { title, content, isPublic } = req.body;
  const note = await Note.create({
    user: req.user._id,
    title,
    content,
    isPublic,
  });
  res.status(201).json(note);
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content, isPublic } = req.body;
  const note = await Note.findOneAndUpdate(
    { _id: id, user: req.user._id },
    { title, content, isPublic },
    { new: true }
  );
  res.json(note);
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  await Note.findOneAndDelete({ _id: id, user: req.user._id });
  res.json({ message: "Note deleted" });
};
