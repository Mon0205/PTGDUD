import React from 'react'
import EditorDetails from './EditorDetails'
import './Editor.css'
const Editor = ({ editors }) => {
    return (
        <div className='editor-container'>
            <div className='editor-title'>
                <h3>Editor's pick</h3>
                <p>Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
            </div>
            <div className='editor'>
                {editors.map((editor) => (
                    <EditorDetails
                        key={editor.id}
                        editor={editor}
                    // onDelete={() => onDeleteContact(contact.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Editor