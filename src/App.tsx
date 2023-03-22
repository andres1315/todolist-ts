import { useState } from 'react'
import { Footer } from './components/Footer'
import { Todos } from './components/Todos'
import { TODO_FILTERS } from './consts'
import { type FilterValues, type Todo as TodoType, type TodoId } from './types'

const mockTodos = [
  {
    id: 1,
    title: 'todo 1',
    completed: false
  },
  {
    id: 2,
    title: 'todo 2',
    completed: true
  },
  {
    id: 3,
    title: 'todo 3',
    completed: true
  }
]

function App (): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValues>(TODO_FILTERS.ALL)
  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  const handleFilterChannge = (filter: FilterValues): void => {
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })
  return (
    <div className='todoapp'>
      <Todos
        onRemoveTodo={handleRemove}
        onCompletedTodo={handleCompleted}
        todos={filteredTodos}
      />
      <Footer
        handleChangeFilter={handleFilterChannge}
        filterSelected={filterSelected}
        todos={filteredTodos}
        />
    </div>

  )
}

export default App
