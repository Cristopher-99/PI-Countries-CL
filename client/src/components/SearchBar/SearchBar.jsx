import {useState} from 'react'
import { useDispatch} from 'react-redux'
import { searchCountries} from '../../redux/actions'

import "./SearchBar.css"
export default function SearchBar(setCurrentPage){
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    function onSubmit(e){
        e.preventDefault();
        if(search.length === 0) return alert("Debe colocar el nombre del pais");
        dispatch(searchCountries(search) )
        setSearch('')
    }
    function onInputChange(e){
        e.preventDefault();
        setSearch(e.target.value);
    }
    return(
        <div className="SearchBar">
            <form onSubmit={onSubmit}>
                <input className='inputCountry' type="text" placeholder='Buscar pais...' onChange={onInputChange} value={search} />
                <input className='inputButton' type="submit" value="buscar" />
            </form>
        </div>
    )


}