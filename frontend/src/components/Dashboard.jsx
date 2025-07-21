// src/components/Dashboard.jsx
import { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import NoteEditor from './NoteEditor';
import {
  getNotes,
  createNote as createNoteApi,
  updateNote as updateNoteApi,
  deleteNote as deleteNoteApi,
} from '../context/NotesApi';
import { useAuth } from '../context/AuthContext'; // assumes you have AuthContext

const Dashboard = () => {
  const { token } = useAuth(); // must return token from context
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (!token) return;
    const fetchNotes = async () => {
      const fetchedNotes = await getNotes(token);
      setNotes(fetchedNotes);
      if (fetchedNotes.length > 0) {
        setSelectedNote(fetchedNotes[0]);
      }
    };
    fetchNotes();
  }, [token]);

  const createNote = async () => {
    const newNote = await createNoteApi(token, {
      title: 'Untitled Note',
      content: '',
      isPublic: false,
    });
    setNotes(prevNotes => [newNote, ...prevNotes]);
    setSelectedNote(newNote);
    setIsMobileSidebarOpen(false);
  };

  const updateNote = async (id, updates) => {
    const updated = await updateNoteApi(token, id, updates);
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note._id === id ? { ...note, ...updated } : note
      )
    );
    if (selectedNote?._id === id) {
      setSelectedNote(prev => ({ ...prev, ...updated }));
    }
  };

  const deleteNote = async (id) => {
    await deleteNoteApi(token, id);
    const filtered = notes.filter(note => note._id !== id);
    setNotes(filtered);
    if (selectedNote?._id === id) {
      setSelectedNote(filtered.length > 0 ? filtered[0] : null);
    }
  };

  const selectNote = (note) => {
    setSelectedNote(note);
    setIsMobileSidebarOpen(false);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          notes={notes}
          selectedNote={selectedNote}
          onSelectNote={selectNote}
          onCreateNote={createNote}
          onDeleteNote={deleteNote}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          isMobileOpen={isMobileSidebarOpen}
          onMobileClose={() => setIsMobileSidebarOpen(false)}
        />

        <div className="flex-1 flex flex-col">
          {/* Mobile menu button */}
          <div className="lg:hidden border-b border-gray-200 dark:border-gray-700 p-4">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
              <span>Notes</span>
            </button>
          </div>

          <NoteEditor
            note={selectedNote}
            onUpdateNote={updateNote}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
