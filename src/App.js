import { TodoList } from './components/todo-list'
import styled from "styled-components"
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FormPage } from "./pages/form";
import { HomePage } from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

// в StyledTodoList есть пропсы title и items. В последний приходят значения функций
// сам StyledTodoList стилизован и как тег туда приходит функция TodoList из ./components/todo-list
// переходи в ./components/todo-list  


export default App
