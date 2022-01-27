const data = [
  {
    id: 1,
    edad: 32,
  },
  {
    id: 2,
    edad: 12,
  },
  {
    id: 3,
    edad: 65,
  },
  {
    id: 4,
    edad: 23,
  },
  {
    id: 5,
    edad: 19,
  },
  {
    id: 6,
    edad: 105,
  },
]

let result = {
  suma: 0,
  masViejo: null
}

for (let index = 0; index < data.length; index++) {
  let masViejoVar = result.masViejo
  if (!result.masViejo) {
    masViejoVar = data[index].edad
  } else if (result.masViejo < data[index].edad) {
    masViejoVar = data[index].edad
  }
  result = {
    suma: result.suma + data[index].edad,
    masViejo: masViejoVar
  }
}

console.log('[FOR ITERATOR]', result)

const forEachResult = data.forEach(value => value)

console.log('[FOR_EACH ITERATOR]', forEachResult)

const filterResult = data.filter(value => value.edad < 18)

console.log('[FILTER "ITERATOR"]', filterResult)

const findResult = data.find(value => value.edad < 18)

console.log('[FIND "ITERATOR"]', findResult)

const mapResult = data.map((value) => {
  return value.id
})

console.log('[MAP ITERATOR]', mapResult)

function callback(prev, current) {
  let masViejoVar = prev.masViejo
  if (!prev.masViejo) {
    masViejoVar = current.edad
  } else if (prev.masViejo < current.edad) {
    masViejoVar = current.edad
  }
  return {
    suma: prev.suma + current.edad,
    masViejo: masViejoVar
  }
}

const sum = data.reduce(callback, { suma: 0 })

console.log('[REDUCE ITERATOR]', sum)

const numbers = [1, 2, 3, [4, 5], [{ success: true }, [ 6, 7, 8]]]

const flatCallback = function(prev, current) {
  if (Array.isArray(current)) {
    const values = reduceFlat(current) // Recursividad
    return [...prev, ...values]
  }
  return [...prev, current]
}

const reduceFlat = function(values) {
  return values.reduce(flatCallback, [])
}

console.log('[REDUCE FLAT ITERATOR]', reduceFlat(numbers))

console.log('[FLAT ITERATOR]', numbers.flat())