import React from 'react'
//Routes o rutas
import * as routes from './route.js'

// User
import Home from '../Components/Home.jsx'
import Login from '../Components/Login.jsx'
import SignUp from '../Components/SignUp.jsx'
import Obed from '../Components/Obed.jsx'
import Obed2 from '../Components/Obed2.jsx'
import Card from '../Components/Card.jsx'
const RoutesCom = [
    {
        route: routes.SIGNUP,
        components: < SignUp/>
    },
    {
        route: routes.LOGIN,
        components: < Login/>
    },
    {
        route: routes.HOME,
        components: <Home/>
    },
    {
        route: routes.OBED,
        components: <Obed/>
    },
    {
        route: routes.OBED2,
        components: <Obed2/>
    },
    {
        route: routes.CARD1,
        components: <Card/>
    },
    {
        route: routes.RUTA1,
        components: <Ruta1/>
    },
    {
        route: routes.RUTA2,
        components: <Ruta2/>
    }
]
export default RoutesCom