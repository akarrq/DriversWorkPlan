import * as React from 'react';

import Main from '../sites/main/main';
import Availability from '../sites/availability/availability';
import Vehicle from '../sites/vehicle/vehicle';
import Incidents from '../sites/incidents/incidents';

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
