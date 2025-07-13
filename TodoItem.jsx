function TodoItem({ task, toggleComplete, deleteTask }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span>{task.text}</span>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  )
}

export default TodoItem
