import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    useEffect( () => {
       const search = async () => {
           const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                   action: 'query',
                   list: 'search',
                   origin: '*',
                   format: 'json',
                   srsearch: term,
               },
           })
           setResults(data.query.search)
       }

       const timeoutID = setTimeout(() => {
        if(term){
            search() 
           }
       }, 600)

       return () => {
           clearTimeout(timeoutID)
       }
       
    }, [term])

    const renderedResult = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a 
                    target='_blank'
                    href={`https://en.wikipedia.org?curid=${result.pageid}`} 
                    className='ui button'>
                    GO
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                    <span dangerouslySetInnerHTML={ { __html: result.snippet } }></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>ENTER SEARCH TERM</label>
                    <input value={term} onChange={e => setTerm(e.target.value)} className='input' />
                </div>
                
            </div>
            <div className='ui celled list'>{renderedResult}</div>
        </div>
    )
}

export default Search
