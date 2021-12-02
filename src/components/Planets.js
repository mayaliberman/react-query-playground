import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';
const fetchPlanets = async (key, pageNum) => {
	const res = await fetch(`https://swapi.dev/api/planets/?page=${pageNum}`);
	return res.json();
};

const Planets = () => {
	const [page, setPage] = useState(1);

	const { data, status } = useQuery(['planets', page], ({ queryKey }) =>
		fetchPlanets(queryKey[0], page)
	);

	return (
		<div>
			<h2>Planets</h2>
			<button onClick={() => setPage(1)}>Page No.1</button>
			<button onClick={() => setPage(2)}>Page No.2</button>
			<button onClick={() => setPage(3)}>Page No.3</button>
			{status === 'loading' && <div>Loading data </div>}
			{status === 'success' && (
				<div>
					{data.results.map((planet) => (
						<Planet planet={planet} key={planet.name} />
					))}
				</div>
			)}
			{status === 'error' && <div>Error fetching data </div>}
		</div>
	);
};

export default Planets;
