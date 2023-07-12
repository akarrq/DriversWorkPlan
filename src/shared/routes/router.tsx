import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './root';
import ErrorPage from './error-page';
import Dashboard from '../../pages/dashboard';
import Availability from '../../pages/availability';
import Vehicle from '../../pages/vehicle';
import EditCarMileage, {
	addCarMileageAction,
} from '../../pages/vehicle/components/editCarMileage';
import CarsList from '../../pages/vehicle/components/carsList';
import CarCard from '../../pages/vehicle/components/carCard';
import EditCarIncident, {
	addCarIncidentAction,
} from '../../pages/vehicle/components/editCarIncident';

const router = createBrowserRouter([
	{
		path: '/DriversWorkPlan/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/DriversWorkPlan/',
				element: <Dashboard />,
			},
			{
				path: '/DriversWorkPlan/Dostępność',
				element: <Availability />,
			},
			{
				path: '/DriversWorkPlan/Pojazd',
				element: <Vehicle />,
				children: [
					{
						path: '',
						element: <CarsList />,
					},
					{
						path: ':id',
						element: <CarCard />,
					},
					{
						path: ':id/Przebieg',
						action: addCarMileageAction,
						element: <EditCarMileage />,
					},
					{
						path: ':id/Zdarzenie',
						action: addCarIncidentAction,
						element: <EditCarIncident />,
					},
				],
			},
		],
	},
]);

export default router;
