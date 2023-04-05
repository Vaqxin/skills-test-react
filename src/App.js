import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//import Link from '@mui/material/Link';
import AccountMenu from './components/nav/AccountMenu';
import BasicForm from './components/form/BasicForm';
import { Link, Route, Routes } from 'react-router-dom';
import TODO from './pages/todo';
import './App.css';

export default function App() {
  return (
    <Container maxWidth="sm">
		<AccountMenu  />
		<Box sx={{ my: 4 }}>
			<Typography variant="h4" component="h1" gutterBottom>
			TaskPal
			</Typography>
		</Box>
		<Routes>
			<Route path='/todo' element={<TODO/>}/>
		</Routes>
    </Container>
  );
}
