import React, { Component, ChangeEvent } from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '16vh',
    backgroundColor: '#ffffff',
  },
  logo: {
    textAlign: 'center',
    fontFamily: 'Tangerine, cursive',
    userSelect: 'none',
    fontWeight: 700
  },
  hero: {
    height: '84vh',
    backgroundImage: 'url(https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    height: '80vh',
    maxHeight: '300px',
    width: '380px',
    padding: '40px',
    backgroundColor: '#ffffff'
  },
  button: {
    width: '300px',
    height: '50px',
    '&:hover': {
      borderColor: '#000000',
      backgroundColor: 'transparent'
    }
  },
  menu: {
    width: 300,
  },
  field: {
    borderColor: '#000000'
  }
});

type Props = WithStyles<typeof styles>

class Home extends Component<Props> {

  state = {
    language: "PL"
  }

  handleChange = (event: ChangeEvent | any, name: string) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const URL = "/kobieta";
    return (
      <>
        <header className={classes.root}>
          <Typography component="h1" variant="h2" className={classes.logo}>
            Vitalina
          </Typography>
        </header>
        <main className={classes.hero}>
          <FormControl className={classes.form}>
            <Typography component="h3" variant="caption">
              SELECT LANGUAGE
            </Typography>
            <TextField
              select
              label="Language"
              value={this.state.language}
              className={classes.field}
              onChange={(e) => this.handleChange(e, 'language')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Please select your language"
              margin="normal"
              variant="outlined"
            >
              <option value="PL">Polish</option>
            </TextField>
            <Link href={URL}>
              <Button variant="outlined" className={classes.button}>Enter</Button>
            </Link>
          </FormControl>
        </main>
      </>
    );
  }
};

export default withStyles(styles)(Home);
