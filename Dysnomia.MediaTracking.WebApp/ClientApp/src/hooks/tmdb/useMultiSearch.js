import { useEffect, useState } from 'react';

import config from '../../config';

export default function useMultiSearch(term) {
	const [results, setResults] = useState([]);

	useEffect(() => {
		async function fetchData() {
			if(typeof term !== 'string') {
				setResults([]);
				return;
			}

			term = term.trim();

			if(term === '') {
				setResults([]);
				return;
			}

			const res = await fetch(
				`https://api.themoviedb.org/3/search/multi?api_key=${config.TMDB_API_KEY}&query=${term}`
			);

			if(res.status !== 200) {
				setResults([]);
				return;
			}

			try {
				const body = await res.json();

				setResults(body.results);
			} catch {
				setResults([]);
			}
		}
		fetchData();
	}, [term]);

	return results;
}