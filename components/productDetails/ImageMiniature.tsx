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
  imageMiniature: {
    maxWidth: '100%',
    height: 'auto',
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      maxHeight: 300
    }
  },
})
interface ParentProps {
  img: string,
  switchImage: (imgSrc: string) => void;
}

type Props = ParentProps & WithStyles<typeof styles>

const ImageMiniature: NextFunctionComponent<Props> = props => {

  const { classes, img, switchImage } = props;

  function handleSwitchImage(imgSrc: string) {
    switchImage(imgSrc)
  }

  return (
    <Grid className={classes.miniature} xs={3} sm={2} md={12} item>
      <Grid>
        <img
          className={classes.imageMiniature}
          src={img}
          alt="produkt"
          onClick={() => handleSwitchImage(img)}
        />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(ImageMiniature);;