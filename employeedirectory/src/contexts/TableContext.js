import React, { createContext, useState } from 'react'
import staffList from './staff.json'
import { sortBy } from 'underscore'

export const TableContext = createContext();
export default function TableContextProvider(props) {

    const [staffs, setStaffs] = useState(staffList);
    const [direction, setDirection] = useState('');
    const [currentColumn, setCurrentColumn] = useState('');
    const [filters,setFilters] = useState({
        id:'',
        firstName:'',
        lastName: '',
        jobTitle: '',
        jobCategory: '',
        email: '',
        location: ''
    })

    const search = async (key, value) => {
        const resultFilter = Object.assign({}, filters);
        resultFilter[key] = value
        await setFilters(resultFilter)
        // console.log(resultFilter);
        // console.log(filters);
        let result = staffList;
        Object.entries(resultFilter).forEach(([filterKey, filterValue]) => {
            result = result.filter(staff => {
                if(filterKey === 'id'){
                    console.log(typeof(filterValue), typeof(staff[filterKey]))
                    return (filterValue)? filterValue == staff[filterKey] : true
                }
                else{
                    return (filterValue)?  staff[filterKey].toLowerCase().includes(filterValue.toLowerCase()) : true
                }
            })
        });
        setStaffs(result);
    }


    const sort = (key) => {
        if(key!== currentColumn){
            setStaffs(sortBy(staffs,key));
            setCurrentColumn(key)
            setDirection('ascending');
        }else{
            direction=== "ascending" ? setDirection('descending') : setDirection('ascending')
            setStaffs(staffs.reverse())
        }
    }
    return (
        <TableContext.Provider value={{ staffs, sort, search, filters}}>
            {props.children}
        </TableContext.Provider>
    )
}
