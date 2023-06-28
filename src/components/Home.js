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


const Home = () => {
    const classes = useStyles();

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
                                    variant="outlined" required fullWidth id="stuname" label="Name" />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField autoComplete="email" name="email"
                                    variant="outlined" required fullWidth id="email" label="Email Address" />
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>Add</Button>
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