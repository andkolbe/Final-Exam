import * as React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Admin from './views/Admin';
import Details from './views/Details';
import Home from './views/Home';
import Login from './views/Login';
import NewBook from './views/NewBook';
import Register from './views/Register';

const App: React.FC<AppProps> = props => {

    return (
        <BrowserRouter>
		<Link to={'/'}>Home</Link>
		<Link to={'/new'}>New Book</Link>
		<Link to={'/login'}>Login</Link>
		<Link to={'/register'}>Register</Link>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/admin/:id'>
					<Admin />
				</Route>
				<Route exact path='/details/:id'>
					<Details />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/new'>
					<NewBook />
				</Route>
				<Route exact path='/register'>
					<Register />
				</Route>
			</Switch>
		</BrowserRouter>
    );
}

interface AppProps {}

export default App;