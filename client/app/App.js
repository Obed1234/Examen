import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import RoutesCom from './routes/routesComponents.js'

const MappingRoutes = p => (
    <Route
        exact path={p.route}
        component = {() => p.components}
        key= {p.route}
    />
)
const App = () => (
			<Router>
				<div>
				{ RoutesCom.map(MappingRoutes)}
				</div>
				</Router>
)
export default App