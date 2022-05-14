import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const ItemNavAdmin = ({ item, setCurrentId }) => {
  return (
    <Link to={''} key={item.id}>
      <li onClick={() => setCurrentId(item.id)}>
        <ListItemButton>
          <ListItemText primary={item.name} />
        </ListItemButton>
      </li>
    </Link>
  );
};

export default ItemNavAdmin;
