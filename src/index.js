import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ListStagiaire from './compo/ListStagiaire';
import DetailStagiaire from './compo/DetailStagiaire';
import AddStagiaire from './compo/AddStagiaire';
import Header from './head/Header';
const initialState = [
    {
        image: 'https://randomuser.me/api/portraits/men/46.jpg',
        nom: 'Zaid',
        prenom: 'Riyad',
        filiere: 'TDI',
    },
    {
        image: 'https://randomuser.me/api/portraits/men/41.jpg',
        nom: 'Jamaoui',
        prenom: 'Mouad',
        filiere: 'TDI',
    },

    {
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        nom: 'Jamaoui',
        prenom: 'Aymane',
        filiere: 'TDI',
    },
    {
        image: 'https://randomuser.me/api/portraits/women/45.jpg',
        nom: 'Saidi',
        prenom: 'Imane',
        filiere: 'TDI',
    },
    {
        image: 'https://randomuser.me/api/portraits/women/40.jpg',
        nom: 'Zerhouni',
        prenom: 'wiam',
        filiere: 'TDI',
    },
]

const stagiaireReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_stagiaire':
            return [...state, action.payload]
        default:
            return state
    }
}
const store =createStore(stagiaireReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
      <Header/>
                <Routes>
                   
                    <Route path={'/'} element={<ListStagiaire/>}/>
                    <Route path={'/:nom'} element={<DetailStagiaire/>}/>
                    <Route path={'/add'} element={<AddStagiaire/>}/>
                 
                </Routes>
            </BrowserRouter>

    </Provider>
      
  
);


