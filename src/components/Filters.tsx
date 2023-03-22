import { FILTERS_BUTTONS } from '../consts'
import { type FilterValues } from '../types'

interface Props {
  filterSelected: FilterValues
  onFilterChanged: (filter: FilterValues) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChanged }) => {
/*   const handleClick = (Filter: FilterValues) => () => {

  } */
  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, label }]) => {
          const isSelected = filterSelected === key
          const className = isSelected ? 'selected' : ''
          return (
            <li key={key}>
              <a
                className={className}
                hidden={key === href}
                onClick={(e) => {
                  e.preventDefault()
                  onFilterChanged(key as FilterValues)
                }}
              >
                {label}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
