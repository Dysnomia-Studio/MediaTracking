import { useState } from 'react';

import useMultiSearch from '../hooks/tmdb/useMultiSearch';

export default function Home() {
	const [text, setText] = useState();
	const results = useMultiSearch(text);

	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<div class="flex justify-center">
					<div class="mb-3 xl:w-96">
						<div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
							<input
								type="search"
								class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								placeholder="Search"
								aria-label="Search"
								aria-describedby="button-addon2"
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{results.map((elt) => (
						<a key={elt.id} href={elt.href} className="group">
							<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
								<img
									src={'https://www.themoviedb.org/t/p/w220_and_h330_face' + elt.poster_path}
									alt={elt.original_name || elt.original_title}
									className="w-full h-full object-center object-cover group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">{elt.original_name || elt.original_title}</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">{elt.original_description}</p>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
