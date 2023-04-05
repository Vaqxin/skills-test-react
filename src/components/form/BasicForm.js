import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import {Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const BasicForm = () => { 
   const [todos, setTodos] = useState([]);

   const handleSubmit = (values, { resetForm }) => {
    setTodos([...todos, values.todo]);
    resetForm();
   }

   const handleDelete = index => {
    setTodos(todos.filter((_, i) => i !== index))
   }
  
  return(
    <div className='todo-main'>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          todo: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className='todo-form'>
          <label htmlFor="todo">Add Task </label>
          <Field as={TextField} id="todo" name="todo" placeholder="What's your task?" />
          <Button type="submit" variant="contained">Submit</Button>
        </Form>
      </Formik>

      <TableContainer>
        <Table>
          <TableHead className='todo-table-head'>
            <TableRow className='todo-table-row'>
              <TableCell>Item</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo, index) => (
              <TableRow className='todo-table-item' key={index}>
                <TableCell>{todo}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDelete(index)}>
                    <DeleteIcon/>
                  </IconButton>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>
    </div>
)};

export default BasicForm
