import React from 'react';
import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/dashboard/Login';
import ProductList from './pages/dashboard/ProductList';
import CreateEditProduct from './pages/dashboard/CreateEditProduct';
import withAuth from './components/withAuth';

function App() {
	return (
		<div>
			<Router>
				<Route exact path="/" component={Home}></Route>
				<Route path="/imovel/:id" component={ProductDetails}></Route>
				<Route path="/login" component={Login}></Route>
				<Route path="/dashboard" component={withAuth(ProductList)}></Route>
				<Route
					path="/novo/:id?"
					component={withAuth(CreateEditProduct)}
				></Route>
			</Router>
		</div>
	);
}

export default App;
