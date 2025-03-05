import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Error from './routes/Error.jsx';
import Login from './routes/Login.jsx';
import VisaoGeral from './routes/VisaoGeral.jsx';
import ProcessosTotais from './routes/ProcessosTotais.jsx';
import Perfil from './routes/Perfil.jsx';
import CadastrarCausa from './routes/CadastrarCausa.jsx';
import Agenda from './routes/Agenda.jsx';

const router = createBrowserRouter([
  {
    //Elementos Pai
    path:'/',element:<App/>,
    errorElement:<Error/>,

    //Elementos Filhos

    children:[
      {path:'/',element:<Home/>},
      {path:'/login',element:<Login/>},
      {path:'/processostotais',element:<ProcessosTotais/>},
      {path:'/visaogeral',element:<VisaoGeral/>},
      {path:'/perfil',element:<Perfil/>},
      {path:'/cadastrarcausa',element:<CadastrarCausa/>},
      {path:'/agenda',element:<Agenda/>},
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)