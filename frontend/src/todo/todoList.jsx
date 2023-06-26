import React from "react";
import IconButton from "../template/iconButton";

export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton style="danger" icon="trash-o" hide={todo.done}
                        onClick={() => props.handleRemove(todo)}
                    ></IconButton>
                    <IconButton style="success" icon="check" hide={!todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}
                    ></IconButton>
                </td>
            </tr>
        ));
    }


    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}