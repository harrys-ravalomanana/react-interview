import React from 'react';
import {connect} from 'react-redux';
import {getResult, getAllResult, getPaginate} from "../../redux/selectors";
import OneMovie from "./OneMovie";
import SearchCategory from "./SearchCategory";
import Paginate from "./Paginate";
import {setResult, setCategories, setAllResult} from "../../redux/actions";

function ShowMovies(props) {
    var initData;
    var data;

    if (props.paginate && props.allresult) {
        data = props.paginate;

        initData = props.allresult;
        const categ = [...new Set(initData.map(it => it.category))];
        props.setCategories(categ);

        function handleDeleteItem(elt) {
            var otherRes = initData.filter(item => item.id !== elt.id);
            props.setAllResult(otherRes);
            props.setResult(otherRes);
            const categ = [...new Set(otherRes.map(it => it.category))];
            props.setCategories(categ);
        }

        const Movie = (elt) => {
            return (
                <li className='item'>
                    <div className="item-inner">
                        <OneMovie {...elt} />
                        <button className="delete-btn" onClick={() => handleDeleteItem(elt)}>Delete</button>
                    </div>
                </li>
            )
        };
        return (
            <div>
                <div className="movies-block">
                    <div className="bloc-filtre"><h3>Filtrer par categorie : </h3>
                        <SearchCategory/>
                    </div>
                    <ul>
                        {
                            data.map((item, index) => (
                                    <Movie key={index}  {...item}/>
                                )
                            )
                        }
                    </ul>
                </div>
                <Paginate/>
            </div>
        );
    }

    return null
}

export default connect(
    state => ({
        result: getResult(state),
        allresult: getAllResult(state),
        paginate: getPaginate(state),
    }),
    {
        setResult,
        setAllResult,
        setCategories,
    }
)(ShowMovies);