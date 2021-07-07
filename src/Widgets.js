import React from 'react'
import './widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

const Widgets = () => {
    const newsArticle = ( heading, subtitle ) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{ heading }</h4>
                <p>{ subtitle }</p>
            </div>
        </div >
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            { newsArticle( "PAPA React is back", "Top news - 999 readers" ) }
            { newsArticle( "Coronavirus: UK updates", "Top news - 886 readers" ) }
            { newsArticle( "Tesla hits new highs", "Cars & auto - 300 readers" ) }
            { newsArticle( "Bitcoin breaks $22k", "Crypto - 300 readers" ) }
            { newsArticle( "Redux is too good?", "Code - 123 readers" ) }
            { newsArticle( "Tesla hits new highs", "Cars & auto - 300 readers" ) }
        </div>
    )
}

export default Widgets
