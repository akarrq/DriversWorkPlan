import * as React from 'react';

import { Grid } from '@mui/material';

import PrimaryAppBar from './components/sites/nav/appBar';
import Main from './components/sites/main/main';
import NavList from './components/sites/nav/nav';
import navReducer from './components/sites/nav/navReducer';
import { NavContext } from './contexts/nav';

function App() {
	const [site, dispatch] = React.useReducer(navReducer, <Main />);

	return (
		<>
			<PrimaryAppBar />
			<Grid container>
				<Grid item xs={2}>
					<NavContext.Provider value={dispatch}>
						<NavList />
					</NavContext.Provider>
				</Grid>
				<Grid item xs={10}>
					{site}
				</Grid>
			</Grid>
		</>
	);
}

export default App;
