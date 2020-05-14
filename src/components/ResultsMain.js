import React from 'react';
import './ResultsMain.css';

const ResultsMain = () => {
    return (
        <>
        <div className='results-cards'>
            <h1 className='main-results'>Latest Recipes</h1>
            <div className='cards-wrap'>
                {/* Map over the cards, MAYBE limit to 8 */}
                <div className='main-card'></div>
                <div className='main-card'></div>
                <div className='main-card'></div>
                <div className='main-card'></div>
                <div className='main-card'></div>
                <div className='main-card'></div>
                <div className='main-card'></div>
                <div className='main-card'></div>
            </div>
        </div>
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

export default ResultsMain;