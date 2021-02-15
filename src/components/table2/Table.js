import React, {useState, useEffect, useMemo} from 'react'
// import Header from './Header'
import TableHeader from './header'

const Table = () => {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const header = [
        {name: "No#", field: "id"},
        {name: "Name", field: "name"},
        {name: "Email", field: "email"},
        {name: "Comment", field: "body"}
    ]

    useEffect(() => {
        const getData = () => {
            fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(json => {
                setLoading(false);
                setComments(json)
                console.log(json)
            })
        };
        getData();
    }, [])

    const commentData = useMemo (() => {
        let computerComments = comments;
        return computerComments;
    }, [comments])

    return (
        <div>
            <table>
                <TableHeader header={header} />
                <tbody>
                    {commentData.map(comment => (
                        <tr>
                            <th>{comment.id}</th>
                            <th>{comment.name}</th>
                            <th>{comment.email}</th>
                            <th>{comment.body}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
