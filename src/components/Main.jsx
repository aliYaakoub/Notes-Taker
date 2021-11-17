import React, { useState } from 'react'

const Main = ({updateNote, currentNote, notes, newNote, setNewNote, titleToUpdate, setTitleToUpdate, contentToUpdate, setContentToUpdate, changes, setChanges}) => {
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function saveNewNote(){
        const noteToSave = {
            id: notes.length,
            title: title,
            content: content
        }
        notes.push(noteToSave);
        console.log(notes);
        setNewNote('');
        setChanges(changes+1)
        setTitle('');
        setContent('');
    }

    if(newNote === ''){
        return (
            <div className='w-full bg-gray-300 h-full overflow-y-scroll'>
                {currentNote === '' ? 
                    <div className='w-full h-full flex items-center justify-center'>
                        <h1 className='text-2xl'>select a note</h1>
                    </div>
                    :
                    <div className='p-5'>
                        <h1 className='text-2xl p-5'>{notes[currentNote].title}</h1>
                        <p className='text-xl'>{notes[currentNote].content}</p>
                    </div>
                }
            </div>
        )
    }
    else if (newNote === 'new'){
        return (
            <div className='w-full bg-gray-300 h-full flex flex-col p-5'>
                <div className='flex flex-col mb-10'>
                    <label htmlFor="title">Set The Title : </label>
                    <input
                        type="text"
                        name='title'
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        className='rounded-lg p-3 shadow outline-none '
                    />
                </div>
                <div className='flex flex-col mb-10'>
                    <label htmlFor="content">Set The Content : </label>
                    <textarea
                        type="text"
                        name='content'
                        value={content}
                        onChange={(e)=>setContent(e.target.value)}
                        className='rounded-lg p-3 shadow outline-none h-80 resize-none'
                    />
                </div>
                <button onClick={()=>saveNewNote()} className='py-3 px-2 rounded-lg bg-gray-400'>Save</button>
            </div>
        )
    }
    else if (newNote === 'update'){
        return (
            <div className='w-full bg-gray-300 h-full flex flex-col p-5'>
                <div className='flex flex-col mb-10'>
                    <label htmlFor="title">Set The Title : </label>
                    <input
                        type="text"
                        name='title'
                        value={titleToUpdate}
                        onChange={(e)=>setTitleToUpdate(e.target.value)}
                        className='rounded-lg p-3 shadow outline-none '
                    />
                </div>
                <div className='flex flex-col mb-10'>
                    <label htmlFor="content">Set The Content : </label>
                    <textarea
                        type="text"
                        name='content'
                        value={contentToUpdate}
                        onChange={(e)=>setContentToUpdate(e.target.value)}
                        className='rounded-lg p-3 shadow outline-none h-80 resize-none'
                    />
                </div>
                <button onClick={()=>updateNote(currentNote)} className='py-3 px-2 rounded-lg bg-gray-400'>Save</button>
            </div>
        )
    }
}

export default Main;