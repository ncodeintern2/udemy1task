import React from 'react'

const FilteredYear =(props) =>{
    const selectFiltredYear =(e)=>{
        props.selectedYear(e.target.value)

    }
    return(
        <select value={props.year} onChange={selectFiltredYear}>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>

        </select>
    )
}
export default FilteredYear;