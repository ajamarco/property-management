import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '90%', 
    },
  },
  root2: {
      flexGrow: 1,
  },
  rooms: {
    '& > *': {
      width: '100%', 
    },
  },
  dobStyle: {
      '& > *': {
        width: '50%', 
      },
    },
  paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100%',
    },
}));

export default useStyles;