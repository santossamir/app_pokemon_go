import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/home/Home";
import Pokemons from "../pages/pokemons/Pokemons";
import Contacts from '../pages/contacts/Contacts';

export default function MainRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<Home />}/>
                <Route exact path={'/pokemons'} element={<Pokemons/>}/>
                <Route exact path={'/contacts'} element={<Contacts/>}/>
            </Routes>
        </BrowserRouter>
    )
}