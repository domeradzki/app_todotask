import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../Column/Column.jsx';

function Board() {
    const columns = [
        { id: 'todo', title: 'To Do', tasks: [] },
        { id: 'inProgress', title: 'In Progress', tasks: [] },
        { id: 'done', title: 'Done', tasks: [] }
    ];

    const onDragEnd = (result) => {
        // Tutaj dodam logikę
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="board">
                {columns.map(column => (
                    <Column key={column.id} column={column} />
                ))}
            </div>
        </DragDropContext>
    );
}

export default Board;
