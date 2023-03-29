import React from 'react'
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Singlequestion = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);
    
    return (
    <article className='question'>
    <div>Singlequestion</div>
    <h5>{title}</h5>
    <button className='question-btn' onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
    </button>
    {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Singlequestion;