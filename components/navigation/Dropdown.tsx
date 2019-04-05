import React, { MouseEventHandler } from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { replaceNativeLetter } from '../../features/utils/replaceNativeLetter';
import { getGender } from '../../features/gender/selectors';
import { NextFunctionComponent } from 'next';
import { RootState } from '../../features/redux/root-reducer';
import { connect } from 'react-redux';

interface StateProps {
	genderType: string;
}

interface ParentProps {
	list: string[];
	mouseIn: MouseEventHandler;
	mouseOut: MouseEventHandler;
}

type Props = StateProps & ParentProps;

const Dropdown: NextFunctionComponent<Props> = props => {
	const { list, mouseIn, mouseOut, genderType } = props;
	return (
		<>
			<ul
				className="nav__dropdown"
				onMouseEnter={mouseIn}
				onMouseLeave={mouseOut}
			>
				{
					list.map((label: any, index: number) => {
						// Change label to URL friendly string
						const splitString = label.toLowerCase().split("");
						const changeString = replaceNativeLetter(splitString);
						const joinString = changeString.join("");
						const renameRoute = joinString.split(" ").join("-")
						const routeName = renameRoute;
						let URL = `/${genderType}/produkty/${routeName}`;
						return (
							<Link key={index} href={URL}>
								<a>
									<Typography
										component="li"
										variant="caption"
									>
										{label}
									</Typography>
								</a>
							</Link>
						)
					})
				}
			</ul>
		</>
	)
}

const mapStateToProps = (state: RootState) => {
	const genderType = getGender(state);

	return {
		genderType,
	};
};

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(Dropdown);