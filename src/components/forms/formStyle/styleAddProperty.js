
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '90%', 
    },
  },
  rooms: {
    '& > *': {
      width: '50%', 
    },
  }
}));

export default useStyles