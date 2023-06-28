import {
    Typography, Box, Grid, TextField, Button} from "@mui/material"
import { deepPurple, green } from "@mui/material/colors"
import { makeStyles } from "@mui/styles"
import List from './List'

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


const Edit = ()=>{
    const classes = useStyles();
    return(
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
                                variant="outlined" required fullWidth id="id" label="ID" disabled value="1" />
                        </Grid>
                        
                        <Grid item xs={6}>
                            <TextField autoComplete="stuname" name="stuname"
                                variant="outlined" required fullWidth id="stuname" label="Name" value="yudi" />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField autoComplete="email" name="email"
                                variant="outlined" required fullWidth id="email" label="Email Address" value="yudi@gmail.com"/>
                        </Grid>
                    </Grid>
                    <Box m={3}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>Update</Button>
                    </Box>
                    <Box m={3} textAlign="center">
                <Button variant="contained" color="primary">Back to Home</Button>
            </Box>
                   
                </form>
            </Grid>
        </Grid>

    </div>
    )
}

export default Edit;