import React from 'react'

export default function TableDetails({ staff }) {
    return (
        <tr>
            <td data-label="id">{staff.id}</td>
            <td data-label="firstName">{staff.firstName}</td>
            <td data-label="lastName">{staff.lastName}</td>
            <td data-label="jobTitle">{staff.jobTitle}</td>
            <td data-label="jobCategory">{staff.jobCategory}</td>
            <td data-label="email">{staff.email}</td>
            <td data-label="location">{staff.location}</td>
        </tr>

    )
}
