import React from 'react';
import './App.css';

import { Route, HashRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/dashboard/Login';
import ProductList from './pages/dashboard/ProductList';
import CreateEditProduct from './pages/dashboard/CreateEditProduct';

/*
então teríamos as seguintes páginas:
- início: mostraria alguns imóveis e teria a barra de busca
- página do imóvel com dados e contato

dashboard:
- login
- início: listagem de imóveis para edição
- página de criação de imóvel
- página de edição de imóvel (reaproveitável da criação)
*/

function App() {
	return (
		<div>
			<Router>
				<Route exact path="/" component={Home}></Route>
				<Route path="/imovel/:id" component={ProductDetails}></Route>
				<Route path="/login" component={Login}></Route>
				<Route path="/dashboard" component={ProductList}></Route>
				<Route path="/novo" component={CreateEditProduct}></Route>
			</Router>
		</div>
	);
}

export default App;
