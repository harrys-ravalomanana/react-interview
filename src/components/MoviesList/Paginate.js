import React, {useState} from 'react';
import {connect} from 'react-redux';
import Multiselect from 'multiselect-react-dropdown';
import {getResult} from "../../redux/selectors";
import {setPaginate, setResult} from "../../redux/actions";

function Paginate(props) {

    var data;
    var current = 1;
    const [paginationItem, setPaginationItem] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(4);
    let options = [{name: '4', id: 1}, {name: '8', id: 2}, {name: '12', id: 3}];
    if (props.result) {
        data = props.result;

        //Number of pages
        function numPages() {
            return Math.ceil(data.length / recordsPerPage);
        }

        changePage(1);

        function prevPage() {
            if (current > 1) {
                current--;
                changePage(current);
            }
        }

        function nextPage() {
            if (current < numPages()) {
                current++;
                changePage(current);
            }
        }

        function changePage(page) {
            if (page < 1) page = 1;
            if (page > numPages()) page = numPages();

            var dataPerPage = [];


            for (var i = (page - 1) * recordsPerPage; i < (page * recordsPerPage) && i < data.length; i++) {
                dataPerPage.push(data[i]);
            }

            props.setPaginate(dataPerPage);

        }

        const AllPages = () => {
            var page = [];
            setPaginationItem(numPages());

            for (var i = 1; i <= paginationItem; i++) {
                page.push(i);
                console.log(page);
            }

            if (page.length > 0) {
                return (
                    <div>
                        <div>{
                            page.map((item, index) => (
                                    <button className={current == item ? 'active' : ''}
                                            onClick={() => changePage(item)}>{item}</button>
                                )
                            )
                        }
                        </div>
                    </div>
                )
            }

            return null;
        };
        const onSelect = (selectedList, selectedItem) => {
            setRecordsPerPage(selectedItem.name);
        };

        const onRemove = (selectedList, selectedItem) => {
            setRecordsPerPage(selectedItem.name);
        };

        return (<div className="pagination-wrapper">
            <div className="pagination">
                <button className="prev_page" onClick={() => prevPage()}>Précédent</button>
                <AllPages/>
                <button className="next_page" onClick={() => nextPage()}>Suivant</button>
            </div>
            <div className="elt-pagination">
                <div className="result-number">Resultat de recherche : {data.length}</div>
                <Multiselect
                    options={options} // Options to display in the dropdown
                    onSelect={onSelect} // Function will trigger on select event
                    selectedValues={4}
                    onRemove={onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                    placeholder="Nombre d'element par page"
                    showArrow='true'
                    emptyRecordMsg="Plus d'autre choix"
                    singleSelect='true'
                />
            </div>

        </div>)


    }

    return null
}

export default connect(
    state => ({
        result: getResult(state),
    }),

    {
        setPaginate, setResult
    }
)(Paginate);