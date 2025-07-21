// src/components/NoteEditor.jsx
import { useState, useEffect } from 'react';

const NoteEditor = ({ note, onUpdateNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title || '');
      setContent(note.content || '');
    }
  }, [note]);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (note) onUpdateNote(note._id, { title: newTitle, content });
  };

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    if (note) onUpdateNote(note._id, { title, content: newContent });
  };

  if (!note) {
    return (
      <div className="p-6 text-center text-gray-500 dark:text-gray-400">
        Select or create a note to start editing.
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <input
        type="text"
        className="w-full text-2xl font-semibold mb-4 bg-transparent outline-none text-gray-900 dark:text-white"
        value={title}
        onChange={handleTitleChange}
        placeholder="Note Title"
      />
      <textarea
        className="w-full h-[calc(100vh-200px)] bg-transparent outline-none text-gray-800 dark:text-gray-200"
        value={content}
        onChange={handleContentChange}
        placeholder="Write your note here..."
      />
    </div>
  );
};

export default NoteEditor;
