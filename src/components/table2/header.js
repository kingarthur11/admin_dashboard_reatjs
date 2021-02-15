import React from 'react'

const Header = ({header}) => {
    return (
        <div>
            <tr>
                {header.map(head => (<th key={head.field}>{head.name}</th>))}
            </tr>
        </div>
    )
}

export default Header
