import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import './Plant.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Plant = () => {

  var [inputs, setInputs] = useState({
    "pid": '', "pname": '', "ptype": '', "clr": '', "size": '',
    "pri": '', "des": '', "stk": '', "status": 'ACTIVE'
  })

  var [selectedimage, setSelectedimage] = useState([]);

  const navigate = useNavigate();

  const inputHandler = (event) => {
    const { name, value } = event.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
    console.log(inputs)
  }

  const handleImage = (event) => {
    const file = event.target.files[0];
    setSelectedimage(file)
    inputs.plantphoto=file;
 }

  const savedata = () => {
    const formdata = new FormData();
    formdata.append('pid',inputs.pid);
    formdata.append('pname',inputs.pname);
    formdata.append('ptype',inputs.ptype);
    formdata.append('clr',inputs.clr);
    formdata.append('size',inputs.size);
    formdata.append('pri',inputs.pri);
    formdata.append('des',inputs.des);
    formdata.append('stk',inputs.stk);
    formdata.append('status',inputs.status);
    formdata.append('plantphoto',selectedimage);
    console.log(formdata);

    fetch("http://localhost:4005/plantnew",
    {method:'post',body:formdata})
    .then((response)=>response.json())
    .then((data)=>{
        alert("Record Saved")
    })
    .catch((err)=>{
        console.log("err")
    })
  }

  return (
    <div className='p'>
 <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <center><h1>Plant Details</h1>
        <form>
          Plant Code : <input type="text" name="pid" id='p1' value={inputs.pid} onChange={inputHandler} />
          <br /><br />
          Plant Name : <input type="text" name="pname" id="p2" value={inputs.pname} onChange={inputHandler} />
          <br /><br />
          Plant Type : <input type="text" name="ptype" id="p3" value={inputs.ptype} onChange={inputHandler} />
          <br /><br />
          Color : <input type="text" name="clr" id="p4" value={inputs.clr} onChange={inputHandler} />
          <br /><br />
          Size : <input type="text" name="size" id="p5" value={inputs.size} onChange={inputHandler} />
          <br /><br />
          Price : <input type="number" name="pri" id="p6" value={inputs.pri} onChange={inputHandler} />
          <br /><br />
          Description : <textarea rows='4' name='des' id='p7' value={inputs.des} onChange={inputHandler} />
          <br /><br />
          Stock : <input type="number" name="stk" id="p8" value={inputs.stk} onChange={inputHandler} />
          <br /><br />
          Image : <input type="file" onChange={handleImage} />
          <br /><br />
          Status   &nbsp;
          <select name='status' value={inputs.status} onChange={inputHandler}>
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>
          <br /><br />
          <Button variant='contained' onClick={savedata}>SAVE</Button>
    
        </form>
        </center>
        </CardContent>
          </Card>
      

    </div>
  )
}

export default Plant