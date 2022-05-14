import style from './ContentTeacher.module.css';
import TextField from '@material-ui/core/TextField';
import { Button } from '@mui/material';
import { useIsDoneTaskMutation } from '../../redux';
import SimpleSnackbar from '../SimpleSnackbar/SimpleSnackbar';

const ItemTask = ({ task }) => {
    const [idDoneTask, { data, isSuccess, isLoading, isError }] = useIsDoneTaskMutation();
    console.log(data);
    const generateForm = (isDone) => ({
        user_id: task.user_id,
        lesson_id: task.lesson_id,
        is_done: isDone,
    });

    return (
        <div className={style['content-task']}>
            <div className={style['div-task_code']}>
                {isSuccess && data[0].is_done ? (<span>+</span>) : null}
                <div>
                    <TextField
                        disabled
                        value={task.code}
                        name="code"
                        id="outlined-multiline-static"
                        label={task.title}
                        multiline
                        minRows={4}
                        variant="outlined"
                    />{' '}
                </div>
                <div className={style['button-task_code']}>
                    <Button
                        onClick={async () => {
                            try {
                                const form = generateForm(true);
                                const result = await idDoneTask(form);
                            } catch (err) {
                                console.log(err);
                            }
                        }}
                        variant="contained"
                        color="success"
                    >
                        Correctly
                    </Button>
                    <Button
                        onClick={async () => {
                            try {
                                const form = generateForm(false);
                                const result = await idDoneTask(form);
                            } catch (err) {
                                console.log(err);
                            }
                        }}
                        variant="outlined"
                        color="error"
                    >
                        Incorrectly
                    </Button>
                </div>
            </div>
            {isError ? <SimpleSnackbar msg={'Not Found'} /> : null}
            {isSuccess ? <SimpleSnackbar msg={'Success'} /> : null}
        </div>
    );
};

export default ItemTask;
