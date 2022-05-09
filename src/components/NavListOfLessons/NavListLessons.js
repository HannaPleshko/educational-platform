import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import lesson from './css/NavListLessons.module.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const NavListLessons = ({ topics }) => {
  const { courseTitle, courseId } = useParams();

  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className={lesson['course-title']}>{courseTitle}</div>
        {topics.map((item, index) => (
          <Link to={`/course/${courseTitle}/${courseId}/${item.title}/${item.id}`}>
            <ListItem button key={item.id}>
              <ListItemText primary={item.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div className={lesson['wrapper']}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="outlined" className={lesson['btn-open']} onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavListLessons;
