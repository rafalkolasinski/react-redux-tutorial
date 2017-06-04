import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieDetails extends Component {
    render() {
        if(!this.props.movie) {
            return(<h4>Select a movie...</h4>);
        }
        return(
            <div>
                <img src={this.props.movie.thumbnail} className="movie-thumbnail"/>
                <h2>{this.props.movie.name}</h2>
                <h3>Director: {this.props.movie.director}</h3>
                <h3>Rating: {this.props.movie.rating}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.activeMovie
    }
}

export default connect(mapStateToProps)(MovieDetails);