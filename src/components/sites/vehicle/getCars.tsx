import * as React from 'react';
import { useEffect, useState } from 'react';

import supabase from '../../../supabaseClient';
import CarCards from './carCards';

const GetCars = () => {
	const [cars, setCars] = useState<any>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			setLoading(true);
			let { data, status, error } = await supabase.from('cars').select('*');
			if (error && status !== 406) {
				throw error;
			}
			if (data) {
				setCars(data);
			}
		} catch (error: any) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	};

	return <>{loading ? <p>loading...</p> : <CarCards cars={cars} />}</>;
};

export default GetCars;
