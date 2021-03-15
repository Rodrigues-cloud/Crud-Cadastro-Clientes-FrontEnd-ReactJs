import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as S from './styles';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//nossos componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {

  const [ filterActived, setFilterActived ] = useState(); //pode setar aqui o all
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);

  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
      .then(response => {
        setTasks(response.data);
      })
  }

  useEffect(() => {
    loadTasks();

    if(!isConnected)
      setRedirect(true);
  }, [filterActived]) //loadTasks

  return (
    <S.Container>
      { redirect && <Redirect to="/qrcode" /> }
      <Header/>
      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Listar todos os Clientes"  actived={filterActived === 'all'}  />
        </button>
      </S.FilterArea>

      <S.Title>
        <h3>CLIENTES</h3>
      </S.Title>

      <S.Content>
        {
          tasks.map(t => (
            <Link to={`/task/${t._id}`}>
            <TaskCard cpf={t.cpf} type={t.type} name={t.name} />
          </Link>
          ))
        }

      </S.Content>
      
      <Footer/>
    </S.Container>
  )
}

export default Home;
