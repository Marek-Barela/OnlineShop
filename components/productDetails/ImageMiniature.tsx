import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { NextFunctionComponent } from 'next';

const styles = (theme: Theme) => createStyles({
  miniature: {
    padding: 5,
    [theme.breakpoints.up('sm')]: {
      padding: '0 5px',
    },
  },
  imgMiniature: {
    maxWidth: '100%',
    height: 'auto',
    cursor: 'pointer',
    opacity: 0.6,
    border: '3px solid #ffffff',
    [theme.breakpoints.down('xs')]: {
      maxHeight: 300
    }
  },
  imgMiniatureActive: {
    opacity: 1,
    border: '3px solid rgba(0,0,0, 0.54)'
  }
})
interface ParentProps {
  img: string;
  defaultImg: string;
  switchImage: (imgSrc: string) => void;
}

type Props = ParentProps & WithStyles<typeof styles>

const ImageMiniature: NextFunctionComponent<Props> = props => {

  const { classes, img, defaultImg, switchImage } = props;
  const { miniature, imgMiniature, imgMiniatureActive } = classes;
  const imgClassName = (img !== defaultImg) ? imgMiniature : `${imgMiniature} ${imgMiniatureActive}`;
  console.log(img, defaultImg)
  function handleSwitchImage(imgSrc: string) {
    switchImage(imgSrc)
  }

  return (
    <Grid className={miniature} xs={3} sm={2} md={12} item>
      <Grid>
        <img
          className={imgClassName}
          src={img}
          alt="produkt"
          onClick={() => handleSwitchImage(img)}
        />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(ImageMiniature);;