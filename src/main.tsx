import './index.css';
import { App } from './App';
import { render } from 'react-dom';
import { StrictMode } from 'react';
import { store } from './store/Store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from './components/Reset';

render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Reset />
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>,
	document.getElementById('root'),
);
