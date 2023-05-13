import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { FiltersButtonContainer } from './styles'

interface PaginationButtonsProps {
  currentPage: number
  onChangePage: (page: number) => void
  totalHeroes: number
}

export function PaginationButtons({
  currentPage,
  onChangePage,
  totalHeroes,
}: PaginationButtonsProps) {
  return (
    <FiltersButtonContainer>
      <button
        onClick={() => onChangePage(currentPage - 1)}
        disabled={currentPage === 1}
        title="Voltar para página anterior"
      >
        <MdArrowBackIosNew size={22} />
      </button>
      <span>{currentPage}</span>
      <button
        onClick={() => onChangePage(currentPage + 1)}
        disabled={currentPage === Math.round(totalHeroes / 20) + 1}
        title="Ir para próxima página"
      >
        <MdArrowForwardIos size={22} />
      </button>
    </FiltersButtonContainer>
  )
}
