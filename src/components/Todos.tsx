import { type TodoId, type ListOfTodos, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: (id: TodoId) => void
  onCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompletedTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
          onRemoveTodo={onRemoveTodo}
          onCompletedTodo={onCompletedTodo}
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}/>
        </li>
      ))}
    </ul>
  )
}
