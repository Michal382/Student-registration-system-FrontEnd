import * as React from 'react';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';


export default function Student() {
    const paperStyle={padding: '50px 60px', width:600, margin:"20px auto"}
    const[name,setName]=React.useState('')
    const[address,setAddress]=React.useState('')
    const[students,setStudents]=React.useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,address}
        console.log(student)
        fetch("http://localhost:8080/student/add",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)

        }).then(()=>{
            console.log("New student added")
        })
    }

    React.useEffect(()=>{
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setStudents(result);
        }
    )
    },[])

  return (
    <Box
      component="form"
    //   sx={{
    //     '& > :not(style)': { m: 1, width: '25ch'},
    //   }}
      noValidate
      autoComplete="off"
    >
        <Container>
            <Paper elevation={15} style={paperStyle}>
                <h1 style={{color:"#00c2fb"}}><u>Add Student</u></h1>

      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
      value ={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
            value ={address}
            onChange={(e)=>setAddress(e.target.value)}
      />
         <Button variant="contained" color="secondary" onClick={handleClick}> 
      Add Student
      </Button>

      </Paper>
    <h1>Students</h1>

    <Paper elevation={3} style={paperStyle}>

      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Id:{student.id}<br/>
         Name:{student.name}<br/>
         Address:{student.address}

        </Paper>
      ))
}
    </Paper>
      </Container>
    </Box>
  );
}
