
import {
  CodedError
} from '../commons/types'

const userFailingErrorMesasage = `Something has went terribly wrong!
Please report the following error message to https://github.com/rgrannell1/hotline/issues,
(along with the input text if possible):
`

export const handleErrors = (err:CodedError) => {
  if (err.code) {
    console.error(`${err.code}: ${err.message}`)
  } else {
    console.error(userFailingErrorMesasage)

    console.error(err.message)
    console.error(err.stack)
  }

  process.exit(1)
}
