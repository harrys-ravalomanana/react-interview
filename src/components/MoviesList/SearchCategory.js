import React, {useState} from 'react';
import {connect} from 'react-redux';
import Multiselect from 'multiselect-react-dropdown';
import {getCategories, getAllResult} from "../../redux/selectors";
import {setResult, setCategories} from "../../redux/actions";


function SearchCategory(props) {

    var initData;
    var categoriesList;

    if (props.categories && props.allresult) {

        initData = props.allresult;
        categoriesList = props.categories;

        var options = [];
        for (var i = 0; i < categoriesList.length; i++) {
            options.push(
                {name: categoriesList[i], id: i}
            );

        }
        const updateResult = (selectedList) => {
            var res = [];
            var selectedData;
            if (selectedList.length > 0) {
                for (var i = 0; i < selectedList.length; i++) {
                    console.log(initData);
                    selectedData = initData.filter(item => item.category == selectedList[i].name);
                    Array.prototype.push.apply(res, selectedData);
                }
            }

            props.setResult(res);
            props.setCategories(selectedList);
        }

        const onSelect = (selectedList, selectedItem) => {
            updateResult(selectedList);
        };

        const onRemove = (selectedList, selectedItem) => {
            updateResult(selectedList);
        };


        return <Multiselect
            options={options} // Options to display in the dropdown
            onSelect={onSelect} // Function will trigger on select event
            selectedValues = {options}
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            placeholder="Filtrer par categorie"
            showArrow='true'
            emptyRecordMsg = "Aucune  autre categorie disponible"
        />


    }

    return null
}

export default connect(
    state => ({
        allresult: getAllResult(state),
        categories: getCategories(state),
    }),
    // null
    {
        setResult,
        setCategories
    }
)(SearchCategory);