import React, { useContext } from 'react'
import { TableContext } from '../contexts/TableContext'
import TableDetails from './TableDetails'

export default function TableFrameWork() {
    const { staffs, sort, search, filters } = useContext(TableContext);
    const tableList = staffs.length ? (
        staffs.map(staff => {
            return <TableDetails staff={staff} key={staff.id} />
        })
    ) : (
            <tr></tr>
        );

    return (
        // <div className="ui raised segment">
        <table className="ui sortable celled table">
            <thead>
                <tr>
                    <th className="center"><div className="ui mini input"> <input type="text" onChange={async event => { await search("id", event.target.value) }} value={filters["id"] || ''} /> </div></th>
                    <th className="center"><div className="ui mini input"> <input type="text" onChange={event => search("firstName", event.target.value)} value={filters["firstName"] || ''} /> </div></th>
                    <th className="center"><div className="ui mini input"> <input type="text" onChange={event => search("lastName", event.target.value)} value={filters["lastName"] || ''} /> </div></th>
                    <th className="center"><div className="ui mini input"> <input type="text" onChange={event => search("jobTitle", event.target.value)} value={filters["jobTitle"] || ''} /> </div></th>
                    <th className="center"><div className="ui mini input"> <input type="text" onChange={event => search("jobCategory", event.target.value)} value={filters["jobCategory"] || ''} /> </div></th>
                    <th className="center"><div className="ui mini input"> <input type="text" onChange={event => search("email", event.target.value)} value={filters["email"] || ''} /> </div></th>
                    <th className="center"><div className="ui mini input"> <input type="text" onChange={event => search("location", event.target.value)} value={filters["location"] || ''} /> </div></th>
                </tr>
                <tr>
                    <th className="center" onClick={() => sort("id")}>Employee ID</th>
                    <th className="center" onClick={() => sort("firstName")}>Frist Name</th>
                    <th className="center" onClick={() => sort("lastName")}>Last Name</th>
                    <th className="center" onClick={() => sort("jobTitle")}>Job Title</th>
                    <th className="center" onClick={() => sort("jobCategory")}>Job Category</th>
                    <th className="center" onClick={() => sort("email")}>Email Address</th>
                    <th className="center" onClick={() => sort("location")}>Location</th>
                </tr>

            </thead>
            <tbody>
                {tableList}
            </tbody>
        </table>
        // </div>
    )
}
