/* eslint-disable react/prop-types */
// import React from 'react'
import { useTasks } from "../context/TasksContext"
import { Link } from "react-router-dom"

import days from 'dayjs'
import utc from  'dayjs/plugin/utc';  {/* CORRIGE FECHA DE CREACION DE TAREA */}
days.extend(utc)


function TaskCard({ task }) {

const { deleteTask } = useTasks()

  return (
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <header className="flex justify-between">
        <h1 className="text-2xl font-semibold">{task.title}</h1>

        </header>
        <p className="text-2xl font-semibold">{task.description}</p>

        {/* CORRIGE FECHA DE CREACION DE TAREA */}
        <p>{days(task.date).utc().format('DD/MM/YYYY')}</p>

        <div className="flex gap-x-2 items-center ">
            <button className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => {
              deleteTask(task._id)
            }}>delete</button>
            <Link to={`/tasks/${task._id}`} className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md">edit</Link>
            <br />
        </div>
        
      </div>
  )
}

export default TaskCard
