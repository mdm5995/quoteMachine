export const quoteReducer = (state = {content: '', author: ''}, action) => {
	switch(action.type) {
		case 'GET_QUOTE': {
			return {content: action.payload.content, author: action.payload.author};
		}
		default: {
			return state;
		}
	}
}
export async function getQuote(dispatch, getState) {
	const response = await fetch('https://api.quotable.io/random');
	const quoteData = await response.json();
	dispatch({
		type: 'GET_QUOTE',
		payload: {
			content: quoteData.content,
			author: quoteData.author
		}
	});
};


