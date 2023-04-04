import styled from "styled-components"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { todoFormActions } from "../store/todoFormSlice"
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  border: 1px solid black;
  padding: 30px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  & input {
    margin: 20px 0;
  }
  * {
    font-size: 20px;
  }
`

export const FormPage = () => {
  const { text, deadline } = useSelector(state => state.todoForm.form)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(todoFormActions.changeField({
      name: e.target.name,
      value: e.target.value
    }))
  }

  // const navigate = useNavigate()

  // const handleSave = (e) => {
  //   e.preventDefault()

  //   fetch('http://localhost:3001/', {
  //     method: 'POST',
  //     body: JSON.stringify(form),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  // }

  return (
    <>
    <Link to="/">Go back to Todolist</Link>
    <Form>
      <textarea
        name="text"
        value={text} 
        onChange={handleChange}></textarea>
      <input
        name="deadline" 
        type="date" 
        value={deadline}
        onChange={handleChange}/>
      <button>Save todo</button>
    </Form>
    </>
  )
}