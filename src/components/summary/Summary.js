import React from 'react';

import SummaryItem from '../summaryItem/SummaryItem';

import { //import icons arrow up, arrow down and $ sign from react-icons
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from 'react-icons/fa';

import './summary.sass';

function Summary () {

    return (
        <div id='cards'>
            <SummaryItem title='In' icon={FaRegArrowAltCircleUp()} totalValue={1000} />
            <SummaryItem title='Out' icon={FaRegArrowAltCircleDown()} totalValue={1000} />
            <SummaryItem title='Total' icon={FaDollarSign()} totalValue={1000} />
        </div>
    )
}

export default Summary;