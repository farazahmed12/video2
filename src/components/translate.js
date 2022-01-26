import React, { useState } from 'react'
import Dropdown from './dropdown'
import Convert from './convert'

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM


const options = [
    {
        label: 'Afrikaans ',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

const Translate = () => {

    const [language, setlanguage] = useState(options[0])
    const [text, settext] = useState('')

    return (
        <div>
        <div className='ui form'>
            <div className='field'></div>
            <label>Enter Text</label>
            <input value={text} onChange={(e) => settext(e.target.value)}></input>
        </div>
        
            <Dropdown 
            label={'Select a Language'}
            selected={language} 
            onSelectedChange={setlanguage} 
            options={options} />
            
            <hr />
            <h3 className='ui header'>Output</h3>
            <Convert text={text} language={language} />
        </div>
        
    )
}

export default Translate
