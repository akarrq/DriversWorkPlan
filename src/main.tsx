import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './routes/root';
import Main from './components/sites/main/main';
import Availability from './components/sites/availability/availability';
import Vehicle from './components/sites/vehicle/vehicle';
import Incidents from './components/sites/incidents/incidents';
import ErrorPage from './routes/error-page';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/DriversWorkPlan/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/DriversWorkPlan/Dashboard',
				element: <Main />,
			},
			{
				path: '/DriversWorkPlan/Dostępność',
				element: <Availability />,
			},
			{
				path: '/DriversWorkPlan/Pojazd',
				element: <Vehicle />,
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
