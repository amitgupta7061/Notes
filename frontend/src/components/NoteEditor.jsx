import { useState, useEffect } from 'react';

let debounceTimer;

const NoteEditor = ({ note, onUpdateNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  useEffect(() => {
    if (note) {
      setTitle(note.title || '');
      setContent(note.content || '');
      setIsPublic(note.isPublic || false);
    }
  }, [note]);

  const debouncedUpdate = (updates) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      onUpdateNote(note._id, updates);
    }, 500);
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (note) debouncedUpdate({ title: newTitle, content, isPublic });
  };

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    if (note) debouncedUpdate({ title, content: newContent, isPublic });
  };

  const handleToggle = () => {
    const newStatus = !isPublic;
    setIsPublic(newStatus);
    if (note) debouncedUpdate({ title, content, isPublic: newStatus });
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
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          className="w-full text-2xl font-semibold bg-transparent outline-none text-gray-900 dark:text-white"
          value={title}
          onChange={handleTitleChange}
          placeholder="Note Title"
        />
        <div className="ml-4 flex items-center space-x-2">
          <label htmlFor="publicToggle" className="text-sm text-gray-600 dark:text-gray-400">
            Public
          </label>
          <input
            id="publicToggle"
            type="checkbox"
            checked={isPublic}
            onChange={handleToggle}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </div>
      </div>

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
