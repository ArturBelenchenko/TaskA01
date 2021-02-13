import React from 'react';
import Inner from './Inner';

export default function DataItems({ cardItems }) {
    const cardElements = cardItems.map(item =>
        <Inner key={item.id} item={item} />
    )
    return (
        <div className="inner">
            {cardElements}
        </div>

    )
}