import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { toggleShowCompletedTodos } from '../state/todosSlice'
import { useGetTodosQuery } from '../state/todosApi'

const StyledTodo = styled.li`
  text-decoration: ${pr => pr.$complete ? 'line-through' : 'initial'};
  cursor: pointer;
`

export default function Todo() {
  //rtk query
  const { data: todos } = useGetTodosQuery()
  // redux
  const showCompletedTodos = useSelector(st => st.todosState.showCompletedTodos)
  const dispatch = useDispatch()
  return (
    <div id="todos">
      <div className="error"></div>
      <h3>Todos</h3>
      <ul>
        {
          todos?.filter(todo => {
            return showCompletedTodos || !todo.complete
          })
            .map(todo => {
              return (
                <StyledTodo $complete={todo.complete} key={todo.id}>
                  <span>{todo.label}{todo.complete && ' ✔️'}</span>
                </StyledTodo>
              )
            })
        }
      </ul>
      <button onClick={() => dispatch(toggleShowCompletedTodos())}>
        {showCompletedTodos ? 'Hide' : 'Show'} completed todos
      </button>
    </div>
  )
}
