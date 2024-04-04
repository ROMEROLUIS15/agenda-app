import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc' //validaciones de fechas
dayjs.extend(utc)

function TasksFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks()
  const navigate = useNavigate()
  const params = useParams()


useEffect(() => {
async function loadTask(){
  if (params.id) {
    const task = await getTask(params.id)
    console.log(task)
    setValue('title', task.title)
    setValue('description', task.description)
    // setValue('date', dayjs.utc(task.date).format("YYYY-MM-DD"))
    setValue('date', dayjs(task.date).utc().format("YYYY-MM-DD"))
  }
}
loadTask()
}, [])


const onSubmit = handleSubmit((data) => {
  const dataValid = {
    ...data,
    date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format()
  }
  if (params.id) {
    updateTask(params.id, dataValid)
  } else {
    createTask(dataValid)
  }
 navigate('/tasks')
})

  // const onSubmit = handleSubmit((data) => {
  //   if (params.id) {
  //     updateTask(params.id, {
  //       ...data,
  //       date: dayjs.utc(data.date).format(),
  //     });
  //   } else {
  //     createTask({
  //       ...data,
  //       date: dayjs.utc(data.date).format(),
  //     })
  //   }
  //   navigate('/tasks')
  // })
  

  // const onSubmit = handleSubmit((data) => {
  //   if (params.id) {
  //     updateTask(params.id, data)
  //   } else {
  //     createTask(data) 
  //   }
  //   navigate('/tasks')
  // })

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md my-2 ">
      <form onSubmit={onSubmit}>
        <label className="text-white" htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1"
          autoFocus
        />

      <label className="text-white" htmlFor="Description">Description</label>
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>

        <label className="text-white" htmlFor="date">Date</label>
        <input type="date" { ...register('date')} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"/>

        <button className="w-full bg-red-700 hover:bg-red-600 text-white rounded-md text-lg font-bold my-2 py-3">Save</button>
      </form>
    </div>
    </div>
  );
}

export default TasksFormPage;
