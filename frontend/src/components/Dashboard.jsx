import { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import NoteEditor from './NodeEditor';
import { loadNotes, saveNotes, generateId } from '../utils/storage';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const savedNotes = loadNotes();
    setNotes(savedNotes);
    if (savedNotes.length > 0) {
      setSelectedNote(savedNotes[0]);
    }
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const createNote = () => {
    const newNote = {
      id: generateId(),
      title: 'Untitled Note',
      content: '',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    
    setNotes(prevNotes => [newNote, ...prevNotes]);
    setSelectedNote(newNote);
    setIsMobileSidebarOpen(false);
  };

  const updateNote = (id, updates) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id
          ? { ...note, ...updates, updatedAt: Date.now() }
          : note
      )
    );
    
    if (selectedNote?.id === id) {
      setSelectedNote(prev => ({ ...prev, ...updates, updatedAt: Date.now() }));
    }
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    
    if (selectedNote?.id === id) {
      const remainingNotes = notes.filter(note => note.id !== id);
      setSelectedNote(remainingNotes.length > 0 ? remainingNotes[0] : null);
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