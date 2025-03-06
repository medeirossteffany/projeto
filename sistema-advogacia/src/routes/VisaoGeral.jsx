import React, { useState } from 'react';
import '../global/global.css';
import '../css/VisaoGeral.css';
import AgendaCinza from '../imgs/agendacinza.png';
import CadastroCinza from '../imgs/cadastrarcinza.png';
import EyeCinza from '../imgs/eyecinza.png';
import EyeAzul from '../imgs/eyeazul.png';
import AgendaAzul from '../imgs/agendaazul.png';
import CadastroAzul from '../imgs/cadastroazul.png';
import Logo from '../imgs/logoos.png';
import User from '../imgs/user.png'

const VisaoGeral = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <div className="container">
     <aside className="sidebar">
      <ul>
        <li className="logo">
          <img src={Logo} alt="Logo" />OFICINA DE SOFTWARES
        </li>
        <li 
          className="menu-item" 
          onMouseEnter={() => setHoveredItem('visao')} 
          onMouseLeave={() => setHoveredItem(null)}
          style={{ color: hoveredItem === 'visao' ? '#0D0D54' : '#4F5B67' }}
        >
          <img src={hoveredItem === 'visao' ? EyeAzul : EyeCinza} alt="Visão Geral" /> Visão Geral
        </li>
        <li 
          className="menu-item" 
          onMouseEnter={() => setHoveredItem('agenda')} 
          onMouseLeave={() => setHoveredItem(null)}
          style={{ color: hoveredItem === 'agenda' ? '#0D0D54' : '#4F5B67' }}
        >
          <img src={hoveredItem === 'agenda' ? AgendaAzul : AgendaCinza} alt="Agenda" /> Agenda
        </li>
        <li 
          className="menu-item" 
          onMouseEnter={() => setHoveredItem('cadastro')} 
          onMouseLeave={() => setHoveredItem(null)}
          style={{ color: hoveredItem === 'cadastro' ? '#0D0D54' : '#4F5B67' }}
        >
          <img src={hoveredItem === 'cadastro' ? CadastroAzul : CadastroCinza} alt="Cadastrar Causa" /> Cadastrar Causa
        </li>
      </ul>
      <div className='usermenu'>
        <img className='fotomenu' src={User} alt="User" />
        <div className='dadosmenu'>
          <li>Teste</li>
          <li>teste@teste.com</li>
        </div>
      </div>
    </aside>

      <main className="main-content">
        <div className="top-bar">
          <h1>Visão Geral</h1>
          <div className="filter-bar">
            <button>Filtrar processos</button>
            <input type="text" placeholder="Consulta Rápida" />
          </div>
        </div>

        <div className="cards-container">
          <div className="card">
            <div className="icon">🔄</div>
            <h3>132 Processos</h3>
            <p>Processos totais</p>
          </div>

          <div className="card">
            <div className="icon">🕒</div>
            <h3>80 Em andamento</h3>
            <p>Processos em andamento</p>
          </div>

          <div className="card">
            <div className="icon">✅</div>
            <h3>52 Finalizados</h3>
            <p>Processos finalizados</p>
          </div>

          <div className="card">
            <div className="icon">👤</div>
            <h3>140 Clientes</h3>
            <p>Clientes totais</p>
          </div>
        </div>

        <div className="extra-options">
          <div className="option-card">
            <div className="icon">📊</div>
            <div>
              <h3>Dashboard Geral</h3>
              <p>Visualize seu desempenho em tempo real</p>
            </div>
          </div>

          <div className="option-card">
            <div className="icon">🤖</div>
            <div>
              <h3>Assistente Jurídico IA</h3>
              <p>IA para demandas jurídicas</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default VisaoGeral;
