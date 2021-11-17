import React, { useEffect, useState} from 'react'

const Aside = ({notes, currentNote, setCurrentNote, setNewNote, setTitleToUpdate, setContentToUpdate, setChanges, changes}) => {

    const [notesThis, setNotesThis] = useState([]);

    function changeNewNote(index){
        setCurrentNote(index);
        setNewNote('');
        setChanges(changes+1);
    }

    function deleteNote(index){
        setCurrentNote('')
        notes.splice(index,1)
        setChanges(changes+1);
    }

    function updateNote(index){
        setCurrentNote(index);
        setTitleToUpdate(notes[index].title);
        setContentToUpdate(notes[index].content);
        setNewNote('update');
        setChanges(changes+1);
    }

    useEffect(()=>{
        setNotesThis(notes);
    },[notes])

    return (
        <div className='w-2/5 text-white bg-gray-400 h-full overflow-y-scroll'>
            <div className='flex flex-row items-center justify-between text-xl mx-3 p-3 border-b'>
                <h1>Your Notes : </h1>
                <button onClick={()=>setNewNote('new')}>&#10011;</button>
            </div>
            {notes.length === 0 ? 
                <h1 className='text-xl mx-3 p-3'>no notes to show</h1>
                :
                <div className='my-5 mx-3'>
                    {notesThis.map(note => (
                        <div className=' border-b rounded-lg my-1 w-full hover:bg-gray-500 transition-colors cursor-pointer flex flex-row justify-between items-center'>
                            <h1
                                onClick={()=>changeNewNote(notes.indexOf(note))}
                                className='w-full h-full p-3'
                            >
                                {note.title}
                            </h1>
                            <div className='flex flex-row'>
                                <span className='px-2' onClick={()=>updateNote(notes.indexOf(note))}>&#9998;</span>
                                <span className='px-2' onClick={()=>deleteNote(notes.indexOf(note))}>&#10005;</span>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Aside;