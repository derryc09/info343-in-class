import React from "react";
var posterPath = "http://image.tmdb.org/t/p/w154/";
export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <h2>{this.props.movie.title}</h2>
                    <img src={"http://image.tmdb.org/t/p/w500/"+this.props.movie.backdrop_path}/>
                <p>{this.props.movie.overview}</p>
                
            </div>
        );
    }
}