import React, { MouseEventHandler } from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { NextFunctionComponent } from 'next';

interface Props {
  list: never[];
  mouseIn: MouseEventHandler;
  mouseOut: MouseEventHandler;
}

const Dropdown: NextFunctionComponent<Props> = props => {
  const { list, mouseIn, mouseOut } = props;
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
              <Link key={index} href={`/?title=${item.product}`}>
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

export default Dropdown;