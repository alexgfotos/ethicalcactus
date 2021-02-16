import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar       
      >
        <Toolbar style={{
          backgroundColor: "#8a3433",
          textAlign: "center"
          
        }}>
          <Typography variant="h4" noWrap align= "center">
            ETHICAL CACTUS
          </Typography>
        </Toolbar>
        
      </AppBar>
      
    </div>
  );
}
