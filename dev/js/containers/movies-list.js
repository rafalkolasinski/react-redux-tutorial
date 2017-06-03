import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMovie} from '../actions/index'

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
                <li
                    key={movie.id}
                    onClick={() => this.props.selectMovie(movie)}
                >
                    {movie.name}
                </li>
            );
        });
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectMovie: selectMovie}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MoviesList);
