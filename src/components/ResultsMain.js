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
        </>
        
    )
};

export default ResultsMain;