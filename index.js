import { showMessage } from './message'

const sumNum = () => {
  const result = 1 + 3
  const object = { message: 'Hola mundo', moreValues: [1, 2, 3, 4] }
  return {
    result,
    ...object
  }
}

showMessage('   hola    '.trimStart())

sumNum()