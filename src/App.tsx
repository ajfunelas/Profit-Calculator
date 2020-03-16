import React from 'react';
import './App.css';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import { Router, Route, Switch } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import ReactGA from "react-ga"
import Home from './pages/homepage';

const history = createHistory()
history.listen((location, action) => {
	ReactGA.set({ page: location.pathname })
	ReactGA.pageview(location.pathname)
})

const engine = new Styletron();

const Routes = () => {
	React.useEffect(() => {})

	return (
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={Home}/>
				</Switch>
			</Router>
	)
}

export default function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Routes />
      </BaseProvider>
    </StyletronProvider>
  );
}

