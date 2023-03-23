import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { getQuote } from './quoteSlice';
import { useState, useEffect } from 'react';

function App() {

	const {content, author} = useSelector((state) => state);
	const [quoteText, setQuoteText] = useState(`"${content}" —${author}`);
	const dispatch = useDispatch();

	useEffect(() => {
		setQuoteText(encodeURI(`"${content}"\n\t—${author}`));
	}, [content, author]);

	const handleOnClick = () => {
		dispatch(getQuote);
	}

  return (
    <div className="App">
			<figure id="quote-box">
				<blockquote id="text">
					"{content}"
				</blockquote>
				<figcaption id="author">
					&mdash; {author}
				</figcaption>
			</figure>
			<div className="controls">
				<button id="new-quote" onClick={handleOnClick}>Get new quote</button>
				<a href={`https://twitter.com/intent/tweet/?text=${quoteText}`} target="_blank" rel="noreferrer">Tweet this!</a>
			</div>
    </div>
  );
}

export default App;
