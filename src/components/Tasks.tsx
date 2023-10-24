import Button from "./Button";
import { useState } from "react";
// import axios from 'axios'

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handledClick = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    const data = await response.json();

    setTasks(data);
  };

  return (
    <div>
      <h1>Tasks from API</h1>
      <Button disabled onClick={handledClick}>
        Get Tasks from API
      </Button>

      {tasks.map((tasks) => {
        return <p key={tasks.id}>{tasks.title}</p>;
      })}
    </div>
  );
};

export default Tasks;
