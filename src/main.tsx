import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './routes/root';
import Main, { workDaysLoader } from './components/pages/main';
import Availability from './components/pages/availability';
import Vehicle, { vehiclesLoader } from './components/pages/vehicle';
import Incidents from './components/pages/incidents';
import ErrorPage from './routes/error-page';
import './index.css';
import EditCar, {
	addCarMileageAction,
} from './components/pages/vehicle/editCar';
import CarCards from './components/pages/vehicle/carCards';

const router = createBrowserRouter([
	{
		path: '/DriversWorkPlan/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/DriversWorkPlan/Dashboard',
				element: <Main />,
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
						element: <CarCards />,
					},
					{
						path: ':id',
						action: addCarMileageAction,
						element: <EditCar />,
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
