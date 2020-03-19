import React from 'react'
import TextField from '@material-ui/core/TextField'
import '../components/searchbar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);



    }

    handleChange = e => {
        let value = e.target.value
        this.setState({value: value})
        this.handleSubmit(e, value)
       
    }


    handleSubmit(e, text) {
        this.props.handleSearchTerm(text);
        e.preventDefault()
    
    }


   

    render() {
        return (
            <div className="search-bar-container">
            <form onSubmit={this.handleSubmit}>
       
            <input
                className="food-search"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="search"
            />
            </form>
            </div>
        )
    }
}

export default SearchBar


