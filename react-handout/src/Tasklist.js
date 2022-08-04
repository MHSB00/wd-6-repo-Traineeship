import React from 'react';
import Task from './Task';

export default function Tasklist({ tasks, handleComplete }) {
    document.title = 'Amount of tasks: ' + tasks.length;
    return (
        tasks.map(task => {
            return <Task key={task.id} task={task} handleComplete={handleComplete} />
        })
    );
}