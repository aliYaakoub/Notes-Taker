import Aside from './components/Aside';
import Main from './components/Main';
import { useState } from 'react';
import './App.css';

function App({notes}) {

  const [currentNote, setCurrentNote] = useState('');
  const [newNote, setNewNote] = useState('');
  const [changes, setChanges] = useState(0);
  const [titleToUpdate, setTitleToUpdate] = useState('');
  const [contentToUpdate, setContentToUpdate] = useState('');

  function updateNote(index){
    const updatedNote = {
      title: titleToUpdate,
      content: contentToUpdate
    }
    notes.splice(index,1,updatedNote);
    setNewNote('')
  }

  return (
    <div className="h-screen flex flex-row">
      <Aside 
        notes={notes} 
        titleToUpdate={titleToUpdate} 
        setTitleToUpdate={setTitleToUpdate} 
        contentToUpdate={contentToUpdate} 
        setContentToUpdate={setContentToUpdate} 
        newNote={newNote} 
        setNewNote={setNewNote} 
        currentNote={currentNote} 
        setCurrentNote={setCurrentNote} 
        changes={changes}
        setChanges={setChanges}
      />
      <Main 
        notes={notes} 
        currentNote={currentNote} 
        setNewNote={setNewNote} 
        newNote={newNote} 
        titleToUpdate={titleToUpdate} 
        setTitleToUpdate={setTitleToUpdate} 
        contentToUpdate={contentToUpdate} 
        setContentToUpdate={setContentToUpdate} 
        updateNote={updateNote}
        changes={changes}
        setChanges={setChanges}
      />
    </div>
  );
}

export default App;
