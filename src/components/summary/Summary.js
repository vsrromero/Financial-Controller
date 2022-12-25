import React from 'react';

import SummaryItem from '../summaryItem/SummaryItem';

import { //import icons arrow up, arrow down and $ sign from react-icons
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from 'react-icons/fa';

import './summary.sass';

function Summary (props) {

    return (
        <div id='cards'>
            <SummaryItem title='Incoming' icon={FaRegArrowAltCircleUp()} totalValue={props.income} />
            <SummaryItem title='Outgoing' icon={FaRegArrowAltCircleDown()} totalValue={props.expense} />
            <SummaryItem title='Total' icon={FaDollarSign()} totalValue={props.total} />
        </div>
    )
}

export default Summary;