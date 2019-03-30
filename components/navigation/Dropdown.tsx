import React, { MouseEventHandler } from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'next/router';
import { NextFunctionComponent } from 'next';

interface Props {
  list: never[];
  mouseIn: MouseEventHandler;
  mouseOut: MouseEventHandler;
  router: any;
}

const Dropdown: NextFunctionComponent<Props> = props => {
  const { list, mouseIn, mouseOut, router } = props;
  return (
    <>
      <ul
        className="nav__dropdown"
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
      >
        {
          list.map((item: any, index: number) => {
            return (
              <Link key={index} href={`${router.route}?title=${item.product}`}>
                <a>
                  <Typography
                    component="li"
                    variant="caption"
                  >
                    {item.product}
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

export default withRouter(Dropdown);