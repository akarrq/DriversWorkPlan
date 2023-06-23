import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './routes/root';
import Dashboard, { workDaysLoader } from './components/pages/dashboard';
import Availability from './components/pages/availability';
import Vehicle, { vehiclesLoader } from './components/pages/vehicle';
import Incidents from './components/pages/incidents';
import ErrorPage from './routes/error-page';
import './index.css';
import EditCarMileage, {
	addCarMileageAction,
} from './components/pages/vehicle/editCarMileage';
import CarsList from './components/pages/vehicle/carsList';
import CarCard from './components/pages/vehicle/carCard';

const router = createBrowserRouter([
	{
		path: '/DriversWorkPlan/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/DriversWorkPlan/Dashboard',
				element: <Dashboard />,
				loader: workDaysLoader,
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
						loader: vehiclesLoader,
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
				],
			},
			{
				path: '/DriversWorkPlan/Zdarzenia',
				element: <Incidents />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
