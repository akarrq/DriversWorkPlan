import * as React from 'react';

import Main from '../main/main';
import Availability from '../availability/availability';
import Vehicle from '../vehicle/vehicle';
import Incidents from '../incidents/incidents';

export default function navReducer(state: JSX.Element, action: any) {
	switch (action.type) {
		case 'Dashboard':
			return <Main />;
		case 'Dostępność':
			return <Availability />;
		case 'Pojazd':
			return <Vehicle />;
		case 'Zdarzenia':
			return <Incidents />;
	}
}
