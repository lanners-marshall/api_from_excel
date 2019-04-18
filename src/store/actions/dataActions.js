import axios from 'axios';

let format = (ar) => {

  let helper = (item, letter, counts) => {
    if (item[letter] !== null){
      counts[letter]++
    }
  }

  let counts = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0}

  for (let i = 0; i < ar.length; i++){
    for (let j in counts){
      helper(ar[i], j, counts)
    }
  }

  const data = [
  	["Question", "Count", { role: 'stye'}],
  	['Q 1', counts.a, ''],
  	['Q 2', counts.b, 'silver'],
  	['Q 3', counts.c, 'blue'],
  	['Q 4', counts.d, 'gold'],
  	['Q 5', counts.e, 'red'],
  	['Q 6', counts.f, 'orange'],
  	['Q 7', counts.g, 'purple'],
  	['Q 8', counts.h, 'pink'],
  	['Q 9', counts.i, 'green'],
  	['Q 10', counts.j, 'brown'],
  ]

  return {data: data, location: ar[0].location, date: ar[0].date}
}

export const getSchoolData = () => {
	return dispatch => {
		dispatch({type: 'GET_SCHOOL_START'})
		axios.get('https://bridge.buddyweb.fr/api/exampleapi/example1')
	  .then(res => {
	    let data = format(res.data)
	    dispatch({type: 'GET_SCHOOL_FINISHED', payload: data})
	  })
	  .catch(error => {
	  	dispatch({type: 'GET_SCHOOL_ERROR', payload: error})
	  })
	}
}
