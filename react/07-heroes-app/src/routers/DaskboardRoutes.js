import React from 'react'
import MarvelScreen from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/NavBar';
import { Switch, Route, Redirect } from "react-router-dom";
import HeroeScreen from '../components/heroes/HeroeScreen';
import DcScreen from '../components/dc/DcScreen';

const DaskboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div>
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/heroe/:heroeId" component={ HeroeScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}

export default DaskboardRoutes;
