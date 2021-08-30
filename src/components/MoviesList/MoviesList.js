import React, {useEffect} from 'react';
import {movies$ as moviesData} from "../../movies";
import {connect} from 'react-redux';
import {setResult, setPaginate, setAllResult} from '../../redux/actions';
import ShowMovies from './ShowMovies';

function MoviesList (props){
    useEffect(() => {
        moviesData.then(function (result) {
            props.setResult(result);
            props.setPaginate(result);
            props.setAllResult(result);

        });

    });


        return (
            <div>

                <ShowMovies />
            </div>
        );
}

export default connect(
    null,
    {
        setResult, setAllResult, setPaginate
    }
)(MoviesList);