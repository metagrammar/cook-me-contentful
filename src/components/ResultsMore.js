import React from 'react';
import './ResultsMore.css';

const ResultsMore = () => {
    return (
        <>
        <div className='results-cards-more'>
        <h2 className='main-results'>Other recipes you may be interessted in</h2>
            <div className='cards-wrap'>
                {/* Limit the mapping over the cards to 2 */}
                <div className='main-card'></div>
                <div className='main-card'></div>
            </div>
        </div>
        </>
        
    )
};

export default ResultsMore;