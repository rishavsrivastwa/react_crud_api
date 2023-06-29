import {
    Typography, Box, Grid, TextField, Button, GridComponent
} from "@mui/material"
import { deepPurple, green } from "@mui/material/colors"
import { makeStyles } from "@mui/styles"
import List from './List'
import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const useStyles = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
        color: "white"
    },
    addStuColor: {
        backgroundColor: green[400],
        color: "white"
    },
    scroll: {
        marginTop: '20px',
        width: '100%',
        height: '400px',
        overflowY: 'scroll',
        overflowX: 'hidden',
        position: 'relative'
    }
})

const Home = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [student, setStudent] = useState({
        stuname: "",
        email: ""
    })
    const [status, SetStatus] = useState();

    function onTextFieldChange(e) {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:3000/students`, student)
            setStudent(student.data);
        } catch (error) {
            console.log("Someting went worng!");
        }

    }

    return (
        <div style={{ margin: '10px' }}>
            <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
                <Typography variant="h2">React CRUD with API Call</Typography>
            </Box>
            <Grid container justify="center" spacing={4}>
                <Grid item md={6} xs={12}>
                    <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
                        <Typography variant="h4">Add Student</Typography>
                    </Box>
                    <form noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField autoComplete="stuname" name="stuname"
                                    variant="outlined" required fullWidth id="stuname" label="Name"
                                    onChange={e => onTextFieldChange(e)} />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField autoComplete="email" name="email"
                                    variant="outlined" required fullWidth id="email" label="Email Address"
                                    onChange={e => onTextFieldChange(e)} />
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            <Button type="submit" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)}>Add</Button>
                        </Box>
                    </form>
                </Grid>

                <Grid item md={6} xs={12}>
                    <List />
                </Grid>
            </Grid>

        </div>
    )
}

export default Home