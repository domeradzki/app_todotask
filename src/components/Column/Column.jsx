import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task/Task.jsx';

function Column({ column }) {
    return (
        <div className="column">
            <h3>{column.title}</h3>
            <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                    <div
                        className="taskList"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {column.tasks.map((task, index) => (
                            <Task key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}

export default Column;
