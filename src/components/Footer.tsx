import { type ListOfTodos, type FilterValues } from '../types'
import { Filters } from './Filters'

interface Props {
  todos: ListOfTodos
  filterSelected: FilterValues
  handleChangeFilter: (filter: FilterValues) => void
}
export const Footer: React.FC<Props> = ({ todos, filterSelected, handleChangeFilter }) => {
  const uncompletedTodos = todos.filter((todo) => !todo.completed)
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{uncompletedTodos.length}</strong>
        <span>{uncompletedTodos.length === 1 ? 'item' : 'items'}</span>
      </span>
      <Filters
        filterSelected ={filterSelected}
        onFilterChanged={handleChangeFilter}/>

    </footer>
  )
}
