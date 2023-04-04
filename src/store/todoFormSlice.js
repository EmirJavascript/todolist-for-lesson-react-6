import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  form: {
    text: '',
    deadline: ''
  }
}

export const todoFormSlice = createSlice({
  name: 'todoForm',
  initialState,
  reducers: {
    changeField: (state, action) => {
      state.form = {
        ...state.form,
        [action.payload.name]: action.payload.value
      }
    },
    resetForm: (state) => {
      state.form = initialState.form
    }
  }
})

export const todoFormActions = todoFormSlice.actions

export default todoFormSlice.reducer


// Делаем spread оператором для того, чтобы при изменении одного поля не удалялось значение другого поля