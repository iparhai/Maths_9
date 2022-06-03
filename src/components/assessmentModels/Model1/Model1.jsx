import React from 'react';
import './Model1.css';
import tile from '../images/26.png'
import classroom from '../images/classroom.jpg'
export default function Model1({ prop }) {
    const { question, options, handleClick } = prop
    return (
        <>
            <div className='topBar'>
            </div>
            <div className='classContainer'>
                <img src={classroom} className="classroom" />
                <div className='centered'>
                    <h3>{question}</h3>
                    <div className='options_screen'>
                        {options.map((obj, idx) => {
                            return (
                                <div className='options' onClick={() => handleClick(obj)}>
                                    <img src={tile} width='100%' />
                                    <div className="centeredTile">{obj}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
