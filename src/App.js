import { useState } from 'react'
import { TodoList } from './components/todo-list'
import { startTodolist } from './data'
import { useTodoList } from "./hooks/useTodoList";
import styled from "styled-components"

const StyledTodoList = styled(TodoList)`
  background-color: beige;
  margin-top: 50px;
`

function App() {
  // const [todos, setTodos] = useState(startTodolist)

  const { todos, toggleTodo } = useTodoList(startTodolist)

  const getOverdueTodos = () => {
    const today = new Date()
    return todos.filter((todo) => new Date(todo.deadline) < today && !todo.isDone)
  }

  const getActualTodos = () => {
    const today = new Date()
    return todos.filter((todo) => new Date(todo.deadline) >= today && !todo.isDone)
  }

  const getCompletedTodos = () => {
    return todos.filter((todo) => todo.isDone)
  }

  // const toggleTodo = (id) => {
  //   const updatedTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, isDone: !todo.isDone }
  //     } else {
  //       return todo
  //     }
  //   })
  //   setTodos(updatedTodos)
  // }

  // const div = styled.div`
  //   display: flex;

  // `

  return (
    <div>
      <h1>Todo List</h1>
      <StyledTodoList
        title="Overdue"
        items={getOverdueTodos()}
        onToggleTodo={toggleTodo}
      />
      <StyledTodoList
        title="Actual"
        items={getActualTodos()}
        onToggleTodo={toggleTodo}
      />
      <StyledTodoList 
        title="Completed"
        items={getCompletedTodos()}
        onToggleTodo={toggleTodo}
      />
    </div>
  )
}


export default App
