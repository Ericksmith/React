import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import Index from '../components/Index';
import Show from '../components/Show';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Index} exact={true}/>
                <Route path="/portfolio/:id" component={Show}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contact" component={Contact}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
