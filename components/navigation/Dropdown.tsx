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
	isActiveNav: boolean;
}

type Props = StateProps & ParentProps;

const Dropdown: NextFunctionComponent<Props> = props => {
	const { list, mouseIn, mouseOut, genderType, isActiveNav } = props;
	return (
		<ul
			className={`${"nav__dropdown"} ${isActiveNav && "active__dropdown"}`}
			onMouseEnter={mouseIn}
			onMouseLeave={mouseOut}
		>
			{
				list.map((item: any, index: number) => {
					const { label, endpoint } = item;
					const URL = `/${genderType}/produkty/${endpoint}`;
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
	)
}

const mapStateToProps = (state: RootState) => {
	const genderType = getGender(state);

	return {
		genderType,
	};
};

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(Dropdown);