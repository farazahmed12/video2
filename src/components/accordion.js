import React, { useState } from 'react'

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null)

    const renderedItems = items.map((item, index) => {
        
        // Helper Function is functional component
        const onTitleClick = (index) => {
            setActiveIndex(index)
        } 
        const active = index === activeIndex ? 'active' : ''

        return(
            
            <div key={item.title}>
                <div onClick={() => onTitleClick(index)} className={`title ${active}`}>
                <i className='dropdown icon'></i>
                {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </div>
        )
        
    })

    return (
        <div className='ui styled accordion'>
            {renderedItems}
            
        </div>
    )
}

export default Accordion
