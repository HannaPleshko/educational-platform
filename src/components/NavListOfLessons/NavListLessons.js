import { Link, useParams } from 'react-router-dom';
import lesson from './css/NavListLessons.module.css';
import { Button, ButtonGroup, Box } from '@mui/material';

const NavListLessons = ({ topics }) => {
    const { courseTitle, courseId } = useParams()
    const buttons = [
        <Button key="one">One</Button>,
        <Button key="two">Two</Button>,
        <Button key="three">Three</Button>,
      ];
      
    return (
        <nav className={lesson['nav-container']}>
            <h1>{courseTitle}</h1>
            <Box
                sx={{
                    display: 'flex',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="text"
                >
                    {/* {topics.map((item) =>
                        <Link to={`/course/${courseTitle}/${courseId}/${item.title}/${item.id}`}>
                            <Button key={item.id}> {item.title}</Button>
                        </Link>

                    )} */}
                    {buttons}
                </ButtonGroup>
            </Box>
        </nav>

    );
};

export default NavListLessons;
