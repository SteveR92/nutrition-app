import React from 'react'
import { Link } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


function NoData() {
    const theme = createMuiTheme({
        palette: {
  
          primary: green,
        },
      });
  
    return (
        <div>
            <div><h2 className="status">Sorry, no data at this time.</h2></div>
            <div className="back-button">
            <Link to={`/`} className="link"><ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className="search-new-button">
        <div className="header"><FontAwesomeIcon id="arrow-icon" icon={faArrowLeft} />
          <span id="button-text">Search New Food</span></div>
        </Button>
      </ThemeProvider></Link>
            </div>
        </div>
    )
}

export default NoData