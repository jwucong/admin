import React from 'react'
import Layout from './components/layout'
import {BrowserRouter} from "react-router-dom";
import { hot } from 'react-hot-loader/root';
import './App.scss'
import Router from './router'

const App = () => <Layout />

export default hot(App)
