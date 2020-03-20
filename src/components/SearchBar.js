import React from 'react'
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


    handleSubmit = (e, text) => {
      
        e.preventDefault()
        this.props.handleSearchTerm(text);    
    }


   

    render() {
       

        return (
            <div className="search-bar-container">
            <form onSubmit={this.handleSubmit} onSubmit={e => {e.preventDefault()}}>
       
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


