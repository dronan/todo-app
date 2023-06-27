import React from "react";
import { connect } from "react-redux";
import IconButton from "../template/iconButton";

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr id={todo._id} key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done}
                        onClick={(event) => props.handleMarkAsDone(event, todo)}
                    ></IconButton>
                    
                    <IconButton style="warning" icon="undo" hide={!todo.done}
                        onClick={(event) => props.handleMarkAsPending(event, todo)}
                    ></IconButton>

                    <IconButton style="danger" icon="trash-o" hide={!todo.done}
                        onClick={(event) => props.handleRemove(event, todo)}
                    ></IconButton>
                    
                </td>
            </tr>
        ));
    }


    return (
        <table className="table">
            <thead>
                <tr>
                    <th width="90%">Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })

export default connect(mapStateToProps)(TodoList);