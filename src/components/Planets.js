import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';
const fetchPlanets = async (pageNum = 1) => {
	const res = await fetch(`https://swapi.dev/api/planets/?page=${pageNum}`);
	return res.json();
};

const Planets = () => {
	const [page, setPage] = useState(1);

	const { data, isLoading, isError, isPreviousData, isFetching } = useQuery(
		['planets', page],
		() => fetchPlanets(page),
		{ keepPreviousData: true }
	);

	return (
		<div>
			<h2>Planets</h2>
			<h3>Current Page: {page}</h3>
			<button
				onClick={() => setPage((old) => Math.max(old - 1, 0))}
				disabled={page === 1}
			>
				Previous Page
			</button>
			<button
				onClick={() => {
					if (!isPreviousData && data.next) {
						setPage((old) => old + 1);
					}
				}}
				disabled={isPreviousData || !data?.next}
			>
				Next Page
			</button>
			{isFetching ? <span> Loading...</span> : null}{' '}
			{isLoading ? (
				<div>Loading...</div>
			) : isError ? (
				<div>Error</div>
			) : (
				<div>
					{data.results.map((planet) => (
						<Planet planet={planet} key={planet.name} />
					))}
				</div>
			)}
		</div>
	);
};

export default Planets;
