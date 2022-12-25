import React from 'react';

import GridItem from '../gridItem/GridItem'

import './grid.sass';

function Grid ({items, setItems}) {

    const onDelete = (id) => {
        const itemsToDelete = items.filter((transaction) => transaction.id !== id); //create a new array with all trasactions where ID deleted is not included
        setItems(itemsToDelete);
        localStorage.setItem('transactions', JSON.stringify(itemsToDelete)); //set to local storage the array without the deleted id
    }

    return (
        <table>
            <thead>
                <tr>
                    <th style={{width: '40%'}}>Description</th>
                    <th style={{width: '40%'}}>Value</th>
                    <th style={{width: '10%'}}>Type</th>
                    <th style={{width: '10%'}}></th>
                </tr>
            </thead>
            <tbody>
                {items?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete} />
                ))}
            </tbody>
        </table>
    )
}

export default Grid;