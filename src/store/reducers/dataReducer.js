const initialState = {
	form_data: [],
	info: [],
	location: '',
	date: '',
	error: null
}

const dataReducer = (state = initialState, action) => {
	let data = action.payload
	switch (action.type){
		case "GET_SCHOOL_START":
			return {...state, form_data: [], info: [], location: '', date: '', error: null}
		case "GET_SCHOOL_FINISHED":
			return {...state,  form_data: data.data,  info: data.info, location: data.location, date: data.date }
		case "GET_SCHOOL_ERROR":
			return {...state, error: data}
		default:
			return state
	}
}

export default dataReducer