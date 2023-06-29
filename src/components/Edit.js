import {
    Typography, Box, Grid, TextField, Button
} from "@mui/material"
import { deepPurple, green } from "@mui/material/colors"
import { makeStyles } from "@mui/styles"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
        color: "white"
    },
    addStuColor: {
        backgroundColor: green[400],
        color: "white"
    }
})


const Edit = () => {
    const { id } = useParams();
    const [student, setStudent] = useState({
        stuname: "",
        email: ""
    })
    console.log(student)
    const classes = useStyles();
    const navigate = useNavigate();
    useEffect(() => {
        async function getStudent() {
            try {
                const student = await axios.get(`http://localhost:3000/students/${id}`)
                setStudent(student.data);
            } catch (error) {
                console.log("Something went wrong!")
            }
        }
        getStudent();
    }, [id])

    function onTextFieldChange(e) {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:3000/students/${id}`, student)
            navigate(-1)
        } catch (error) {
            console.log("Someting went worng!");
        }

    }


    return (
        <div style={{ margin: '10px' }}>
            <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
                <Typography variant="h2">React CRUD with API Call</Typography>
            </Box>
            <Grid container justify="center" justifyContent="center" spacing={4}>
                <Grid item md={6} xs={12}>
                    <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
                        <Typography variant="h4">Edit Student</Typography>
                    </Box>
                    <form noValidate>
                        <Grid container spacing={2}>

                            <Grid item xs={6}>
                                <TextField autoComplete="id" name="id"
                                    variant="outlined" required fullWidth id="id" label="ID" disabled value={id} />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField autoComplete="stuname" name="stuname"
                                    variant="outlined" required fullWidth id="stuname" label="Name" value={student.stuname} onChange={e => onTextFieldChange(e)} />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField autoComplete="email" name="email"
                                    variant="outlined" required fullWidth id="email" label="Email Address" value={student.email} onChange={e => onTextFieldChange(e)} />
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            <Button type="submit" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)}>Update</Button>
                        </Box>
                        <Box m={3} textAlign="center">
                            <Button variant="contained" color="primary" onClick={() => navigate(-1)}>Back to Home</Button>
                        </Box>

                    </form>
                </Grid>
            </Grid>

        </div>
    )
}

export default Edit;