import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Container } from './styles'

export function Loading() {
  return (
    <Container>
      <FontAwesomeIcon icon={faSpinner} />
    </Container>
  )
}
