import React, { MouseEventHandler } from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
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
					list.map((item: any, index: number) => {
						const routeName = item.split(" ").join("-").toLowerCase();
						return (
							<Link key={index} as={routeName} href={`${genderType}/produkty/${routeName}`}>
								<a>
									<Typography
										component="li"
										variant="caption"
									>
										{item}
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