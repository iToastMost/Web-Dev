import React from "react";
import { useState } from "react";
import { useSyncExternalStore } from "react";

function ToDoItem(props)
{
       return (
        <div 
        onClick={() => 
        {
            props.onChecked(props.id);
        }}
        >
            <li>{props.text}</li>
        </div>
    );
}

export default ToDoItem;