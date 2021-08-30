import React, {useEffect} from 'react';
import {movies$ as moviesData} from "../../movies";
import {connect} from 'react-redux';
import {setResult, setPaginate, setAllResult} from '../../redux/actions';
import ShowMovies from './ShowMovies';

//Movies List
function MoviesList(props) {

    // Get the json data every time if it is changed
    useEffect(() => {
        moviesData.then(function (result) {
            //data depending on search
            props.setResult(result);
            //data depending on paginate
            props.setPaginate(result);
            //default data || data after deleting items
            props.setAllResult(result);

        });

    });

    return (
        <div>
            <ShowMovies/>
        </div>
    );
}

export default connect(
    null,
    {
        setResult, setAllResult, setPaginate
    }
)(MoviesList);