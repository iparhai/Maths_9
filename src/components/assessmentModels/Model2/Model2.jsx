import React from 'react';
import './Model2.css';
import tile from '../images/26.png'
import classroom from '../images/classroom2.jpg'
export default function Model2({ prop }) {
    const { question, options, handleClick } = prop
    return (
        <>
            <div className='topBar_2'>
            </div>
            <div className='classContainer_2'>
                <img src={classroom} className="classroom_2" />
                <div className='centered_2'>
                    <h3>{question}</h3>
                    <div className='options_screen_2'>
                        {options.map((obj, idx) => {
                            return (
                                <div className='options_2' onClick={() => handleClick(obj)}>
                                    <img src={tile} width='100%' />
                                    <div className="centeredTile_2">{obj}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
