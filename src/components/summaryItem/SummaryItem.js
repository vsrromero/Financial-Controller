import React from 'react';

import './summaryItem.sass'

function SummaryItem ({title, icon, totalValue}) { //could use props, but destructuring in my opinion is better
    return (
        <div className='card'>
            <div className='card-header'>
                <p className='card-header-title'>{title}</p>
                {icon}
            </div>
            <p className='card-total'>{totalValue}</p>
        </div>
    )
}

export default SummaryItem;