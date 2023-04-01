import styled from "styled-components"

const TodoContainer = styled.li`
  background-color: #ccc;
  list-style: none;
  font-size: 18px;

  &:hover {
    color: red;
  }

  & > input {
    margin-right: 10px;
  }
`

// const InputContainer = styled.input`
  
// `

const TodoText = styled.span`
  text-decoration: ${(props) => {
    if (props.isDone) return 'line-through' 
    return 'none'
  }};
`

export const TodoItem = ({ id, text, isDone }) => {
  const handleToggleTodo = () => {
    
  }

  return (
    <TodoContainer>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleToggleTodo}
      />
      <TodoText isDone={isDone}>
          {text}
      </TodoText>
    </TodoContainer>
  )
}
