import React, { useState, Fragment, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useSnackbar } from 'notistack';
import type { INotification } from '../interface/models';

export default function useNotification() {
	const [conf, setConf] = useState<INotification>();
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const action = (key: string | number) => (
		<Fragment>
			<IconButton
				onClick={() => {
					closeSnackbar(key);
				}}
			>
				<CloseIcon />
			</IconButton>
		</Fragment>
	);

	useEffect(() => {
		if (conf?.message) {
			let variant:
				| 'info'
				| 'default'
				| 'error'
				| 'success'
				| 'warning'
				| undefined = 'info';
			if (conf.variant) {
				variant = conf.variant;
			}
			enqueueSnackbar(conf.message, {
				variant: variant,
				autoHideDuration: 5000,
				action,
			});
		}
	}, [conf]);

	return [setConf];
}
