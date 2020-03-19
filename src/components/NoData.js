import React from 'react'
import { Link } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function NoData() {
    return (
        <div>
            <div><h2 className="status">Sorry, no data at this time.</h2></div>
            <div className="back-button">
                <Link to={`/`} className="link"><h2><FontAwesomeIcon className="icon" id="arrow-icon" icon={faArrowLeft} />Search New Food</h2></Link>
            </div>
        </div>
    )
}

export default NoData