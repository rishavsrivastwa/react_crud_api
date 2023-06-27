import { Typography, Box } from "@mui/material"
import { deepPurple } from "@mui/material/colors"
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
        color: "white"
    }
})


const Home = () => {
    const classes = useStyles();

    return (
        <>
            <Box textAlign="center" className={classes.headingColor}>
                <Typography variant="h2">React CRUD with API Call</Typography>
            </Box>
        </>
    )
}

export default Home