import styled from "styled-components"
import { TodoList } from '../components/todo-list'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

// Link и Navigate разные

const StyledTodoList = styled(TodoList)`
  background-color: beige;
  margin-top: 50px;
`

export const HomePage = () => {
  const todos = useSelector(state => state.todo.items)

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

  return (
    <div>
      <h1>Todo List</h1>
      <Link to="/form">Go to TodoForm</Link>
      <StyledTodoList
        title="Overdue"
        items={getOverdueTodos()}
      /> 
      <StyledTodoList
        title="Actual"
        items={getActualTodos()}
      />
      <StyledTodoList 
        title="Completed"
        items={getCompletedTodos()}
      />
    </div>
  )
}