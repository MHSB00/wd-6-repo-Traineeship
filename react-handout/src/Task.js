import React from 'react';

export default function Task({ task, handleComplete }) {
    function passId() {
        handleComplete(task.id);
    }
    return (
        <div>{task.input} <button key={task.id} onClick={passId}>Task Complete!</button></div>
    );
}