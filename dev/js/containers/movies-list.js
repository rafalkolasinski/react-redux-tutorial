import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MoviesList extends Component {
    render() {
        return(
            <ul>
                {this.createListItems()}
            </ul>
        );
    }

    createListItems() {
        return this.props.movies.map((movie) => {
            return(
                <li key={movie.id}>{movie.name}</li>
            );
        });
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MoviesList);
