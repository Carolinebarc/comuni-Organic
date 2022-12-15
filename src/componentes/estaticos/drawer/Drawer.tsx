import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
    backgroundColor: '#FEFAE0',
    color: '#BC6C25',
  },
  link: {
    textDecoration: 'none',
  },
  icons: {
    color: '#BC6C25',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: '#DDA15E',
      color: '#FFF',
    },
  },
  typeIcons: {
    marginRight: '10px',
  },
  menu: {
    color: '#BC6C25',
  },
  items: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
  },
});

type Anchor = 'right';

export default function SDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'right',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.items}>
        <Link to='/Home' className={classes.link}>
          <ListItem className={classes.icons}><HomeIcon className={classes.typeIcons}/>Início</ListItem>
        </Link>
        <Link to='/Login' className={classes.link}>
          <ListItem className={classes.icons}><LoginIcon className={classes.typeIcons}/>Entrar</ListItem>
        </Link>
        <Link to='/Produtos' className={classes.link}>
          <ListItem className={classes.icons}><AddShoppingCartIcon className={classes.typeIcons}/>Produtos</ListItem>
        </Link>
        <Link to='/CadastroProduto' className={classes.link}>
          <ListItem className={classes.icons}><AddIcon className={classes.typeIcons}/>Cadastrar Produto</ListItem>
        </Link>
        <Link to='/Categoria' className={classes.link}>
          <ListItem className={classes.icons}><PlaylistAddIcon className={classes.typeIcons}/>Categoria</ListItem>
        </Link>
        <Link to='/CadastroCategoria' className={classes.link}>
          <ListItem className={classes.icons}><AddIcon className={classes.typeIcons}/>Cadastrar Categoria</ListItem>
        </Link>
        <Link to='/Sobre' className={classes.link}>
          <ListItem className={classes.icons}><InfoIcon className={classes.typeIcons}/>Sobre</ListItem>
        </Link>
        <Link to='/'className={classes.link}>
          <ListItem className={classes.icons}><ExitToAppIcon className={classes.typeIcons}/>Sair</ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {(['right'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className={classes.menu}/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );  
}
