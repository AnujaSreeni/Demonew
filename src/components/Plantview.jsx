
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Plantedit from './Plantedit';


const Plantview = () => {

    
    var [plantview, setPlantview] = useState([])
    var [plants, setPlants] = useState([]);
    var [selected, setSelected] = useState();
    var [update, setUpdate] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3005/pview/")
            .then(response => {
                console.log(response.data)
                setPlantview(response.data)
            })
            .catch(err => console.log(err))
    },[])

    const deletevalues = (id) => {
        console.log("Deleted", id)
        axios.put("http://localhost:3005/updatestatus/" + id)
            .then((response) => {
                alert("DELETED")
                window.location.reload(false);
            })
    }

    const updatevalues = (value) => {
        console.log("Updated", value);
        setSelected(value);
        setUpdate(true);
    }

    var result=

    <div>

            <center>
                <Typography><h3><b>Plant view</b></h3></Typography>
            </center>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Plant ID</TableCell>
                            <TableCell>Plant Name</TableCell>
                            <TableCell>Plant Type</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Size</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Stock</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {plants.map((value, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{value.pid}</TableCell>
                                    <TableCell>{value.pname}</TableCell>
                                    <TableCell>{value.ptype}</TableCell>
                                    <TableCell>{value.clr}</TableCell>
                                    <TableCell>{value.size}</TableCell>
                                    <TableCell>{value.pri}</TableCell>
                                    <TableCell>{value.des}</TableCell>
                                    <TableCell>{value.stk}</TableCell>
                                    <TableCell>
                                        <img src={`data:image/jpeg;base64,${Buffer.from(value.plantphoto.data)}`} width="50" height="50" alt="Error"/>
                                    </TableCell>
                                    <TableCell>{value.status}</TableCell>
                                    <TableCell>
                                        <ModeEditOutlineIcon color='secondary' onClick={() => updatevalues(value)} />
                                    </TableCell>
                                    <TableCell>
                                        <DeleteForeverIcon color='error' onClick={() => deletevalues(value._id)}>
                                        </DeleteForeverIcon>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>

                </Table>
            </TableContainer>


        </div>

if(update){
    result=<Plantedit data={selected} method='put'/>
}

return (result)
}

 

export default Plantview