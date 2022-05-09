import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ItemNavAdmin = ({ item, setCurrentItem }) => {
  return (
    <Link to={''}>
      <li onClick={() => setCurrentItem(item)}>
        <Button variant="default">{item}</Button>
      </li>
    </Link>
  );
};

export default ItemNavAdmin;
