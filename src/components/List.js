import {
    Typography, Box, TableContainer,
    TableCell, Table, TableHead, TableRow, TableBody, Paper, IconButton,
    Tooltip
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from 'react-router-dom'
import axios from "axios"
import { orange } from "@mui/material/colors"
import { useEffect, useState } from "react"

const useStyles = makeStyles({
    stuListColor: {
        backgroundColor: orange[400],
        color: "white"
    },
    tableHeadCell: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
    scroll: {
        width: '100%',
        overflowY: 'scroll',
        overflowX: 'atuo',
        position: 'relative'
    }
})


const List = () => {
    const classes = useStyles();

    const [students, SetStudents] = useState([]);
    useEffect(() => {
        getAllStudent();
    }, [])

    async function getAllStudent() {
        try {
            const students = await axios.get("http://localhost:3000/students")
            SetStudents(students.data);
        } catch (error) {
            console.log("Something went wrong!")
        }
    }
    const handleDelete = async id => {
        await axios.delete(`http://localhost:3000/students/${id}`);
        var newstudent = students.filter((item) => {
            return item.id !== id;
        })
        SetStudents(newstudent);
    }
    return (
        <>
            <Box textAlign="center" p={2} className={classes.stuListColor}>
                <Typography variant="h4">Student List</Typography>
            </Box>
            <TableContainer component={Paper} sx={{ width: '100%', overflowY: 'scroll', maxHeight: 350 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow style={{ backgroundColor: "#616161" }}>
                            <TableCell align="center" className={classes.tableHeadCell}>No</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            students.map((students, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell align="center">{i + 1}</TableCell>
                                        <TableCell align="center">{students.stuname}</TableCell>
                                        <TableCell align="center">{students.email}</TableCell>
                                        <TableCell align="center">
                                            <Tooltip title="View">
                                                <IconButton><Link to={`/view/${students.id}`}><VisibilityIcon color="primary" /></Link></IconButton>
                                            </Tooltip>
                                            <Tooltip title="Edit">
                                                <IconButton><Link to={`/edit/${students.id}`}><EditIcon /></Link></IconButton>
                                            </Tooltip>
                                            <Tooltip title="Delete">
                                                <IconButton onClick={() => handleDelete(students.id)}><DeleteIcon color="red" /></IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}


export default List
