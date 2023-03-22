import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onCompletedTodo }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onCompletedTodo({ id, completed: event.target.checked })
  }
  return (
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed} onChange={(e) => { handleChangeCheckbox(e) }} />
      <label>{title}</label>
      <button
      className='destroy'
      onClick={() => { onRemoveTodo({ id }) }}>

      </button>
    </div>

  )
}
