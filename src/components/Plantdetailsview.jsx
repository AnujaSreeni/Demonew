
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Plantdetailsedit from './Plantdetailsedit';
import {Buffer} from 'buffer'

const Plantdetailsview = () => {

    
    var [Plantdetailsview, setPlantdetailsview] = useState([])
    var [selected, setSelected] = useState();
    var [update, setUpdate] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3005/pview/")
            .then(response => {
                console.log(response.data)
                setPlantdetailsview(response.data)
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
                <Typography><h3><b>Plant Details view</b></h3></Typography>
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
                    {Plantdetailsview.map((value, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{value.plantid}</TableCell>
                                    <TableCell>{value.plantname}</TableCell>
                                    <TableCell>{value.planttype}</TableCell>
                                    <TableCell>{value.color}</TableCell>
                                    <TableCell>{value.size}</TableCell>
                                    <TableCell>{value.price}</TableCell>
                                    <TableCell>{value.description}</TableCell>
                                    <TableCell>{value.stock}</TableCell>
                                    <TableCell>
                                        <img src={`data:image/jpeg;base64,${Buffer.from(value.plantphoto.data).toString('base64')}`} width="50" height="50" alt="Error"/>
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
    result=<Plantdetailsedit data={selected} method='put'/>
}

return (result)
}

 

export default Plantdetailsview