import React, { MouseEventHandler } from 'react';
import List from '@material-ui/core/List';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { getGender } from '../../features/gender/selectors';
import { NextFunctionComponent } from 'next';
import { RootState } from '../../features/redux/root-reducer';
import { connect } from 'react-redux';

const styles = () => createStyles({
	navDropdown: {
		position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		backgroundColor: '#F2F2F2',
		height: 0,
		padding: 0,
		margin: 0,
		listStyleType: 'none',
		zIndex: 0,
		transition: 'all 0.5s'
	},
	navDropdownActive: {
		height: 240
	},
	dropdownContainer: {
		opacity: 0
	},
	activeDropdownContainer: {
		animation: 'animateNav 0.4s ease-in-out'
	},
	listElement: {
		cursor: 'pointer',
		textTransform: 'uppercase',
		textAlign: 'center',
		padding: 2,
		'&:hover': {
			fontWeight: 'bold'
		}
	},
	'@keyframes animateNav': {
		'0%': { opacity: 0 },
		'30%': { opacity: 0 },
		'100%': { opacity: 1 }
	}
})

interface StateProps {
	genderType: string;
}

interface ParentProps {
	list: string[];
	mouseInDropdown: MouseEventHandler;
	mouseOutDropdown: MouseEventHandler;
	dropdownActive: boolean;
	navActive: boolean;
}

type Props = StateProps & ParentProps & WithStyles<typeof styles>;;

const Dropdown: NextFunctionComponent<Props> = props => {
	const { list, mouseInDropdown, mouseOutDropdown, genderType, navActive, dropdownActive, classes } = props;
	const { navDropdown, navDropdownActive, dropdownContainer, activeDropdownContainer, listElement } = classes;
	const currentNavClass = navActive || dropdownActive ? `${navDropdown} ${navDropdownActive}` : navDropdown;
	const currentDropdownClass = !navActive && !dropdownActive ? dropdownContainer : activeDropdownContainer;

	return (
		<List
			className={currentNavClass}
			onMouseEnter={mouseInDropdown}
			onMouseLeave={mouseOutDropdown}
		>
			<Grid className={currentDropdownClass}>
				{
					list.map((item: any, index: number) => {
						const { label, endpoint } = item;
						const URL = `/${genderType}/produkty/${endpoint}`;
						return (
							<Link key={index} href={URL}>
								<Typography
									className={listElement}
									component="li"
									variant="caption"
								>
									{label}
								</Typography>
							</Link>
						)
					})
				}
			</Grid>
		</List>
	)
}

const mapStateToProps = (state: RootState) => {
	const genderType = getGender(state);

	return {
		genderType,
	};
};

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withStyles(styles)(Dropdown));