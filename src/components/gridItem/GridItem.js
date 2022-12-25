import React from 'react';

import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash} from 'react-icons/fa';

import './gridItem.sass';

function GridItem ({item, onDelete}) {
    return (
        <tr>
            <td className='alignStart'>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.date}</td>
            <td>
                {item.expense ? (
                    <FaRegArrowAltCircleDown color='#f00' />
                ) : (
                    <FaRegArrowAltCircleUp color='#050' />
                )}
            </td>
            <td>
                <FaTrash onClick={() => onDelete(item.id)} />
            </td>
        </tr>
    )
}

export default GridItem;