import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Redirect } from 'react-router-dom';

//import api from '../../services/api';

//nossos componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';
import api from '../../services/api';
import isConnected from '../../utils/isConnected'


function Task({match}) {
  const [redirect, setRedirect] = useState(false);  
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [fone, setFone] = useState();
  const [description, setDescription] = useState();
  const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');

  async function LoadTaskDetails(){
      await api.get(`/task/${match.params.id}`)
      .then(response => {
          setType(response.data.type)
          setName(response.data.name)
          setCpf(response.data.cpf)
          setEmail(response.data.email)
          setFone(response.data.fone)
          setDescription(response.data.description)
      })
  }

  async function Save(){
    // validação dos dados no formulario
    if(!name)
        return alert("Você precisa informar o nome do Cliente!")
    else if(!cpf)
        return alert("Você precisa informar o CPF!")
    else if(!email)
        return alert("Você precisa informar o email!")
    else if(!fone)
        return alert("Você precisa informar o número do Telefone!")
    else if(!description)
        return alert("Você precisa informar a Descrição do Cliente!")  
    else if(!type)
        return alert("Você precisa informar uma imagem ícone do Seguimento!")                

      if(match.params.id){
        await api.put(`/task/${match.params.id}`, {
            macaddress,
            cpf,
            type,
            name,
            email,
            fone,
            description
        }).then(() =>
            setRedirect(true)
        )

      }else{
        await api.post('/task', {
            macaddress,
            cpf,
            type,
            name,
            email,
            fone,
            description
        }).then(() =>
            setRedirect(true)
        )
      }
    }

    async function Remove(){
        const res = window.confirm('Deseja realmente remover o Cliente?')
        if(res === true){
            await api.delete(`/task/${match.params.id}`)
            .then(() => setRedirect(true));
        }
    }

  useEffect(() => {
      if(!isConnected)
        setRedirect(true);
      LoadTaskDetails()
  },[])

  return (
    <S.Container>
      { redirect && <Redirect to="/" /> }  
      <Header/>

      <S.Form>
        <S.TypeIcons>
            {
                TypeIcons.map((icon, index) => (
                   index > 0 && 
                   <button type="button" onClick={() => setType(index)}>
                        <img src={icon} alt="Tipo da Tarefa Cadastro" 
                        className={type && type !== index && 'inative'}/>
                   </button>
                ))
            }
        </S.TypeIcons>
        <S.Input>
            <span>NOME</span>
            <input type="text" placeholder="Digite o seu nome..."
            onChange={e => setName(e.target.value)} value={name}/>
        </S.Input>

        <S.Input>
            <span>CPF</span>
            <input type="text" placeholder="Digite o seu CPF..."
            onChange={e => setCpf(e.target.value)} value={cpf}/>
        </S.Input>
        <S.Input>
            <span>EMAIL</span>
            <input type="email" placeholder="seuemail@email.com ..."
            onChange={e => setEmail(e.target.value)} value={email}/>
        </S.Input>
        <S.Input>
            <span>TELEFONE</span>
            <input type="fone" placeholder="Digite seu telefone (XX)XXXX-XXXX"
            onChange={e => setFone(e.target.value)} value={fone}/>
        </S.Input>

        <S.TextArea>
            <span>Descrição do Cliente</span>
            <textarea rows={5} placeholder="Digite as descrições do Cliente ..."
            onChange={e => setDescription(e.target.value)} value={description}/>
        </S.TextArea>

        <S.Input>
            <span>DATA</span>
            <input type="date" placeholder="Digite a data dd/mm/yyyy" />
            <img src={iconCalendar} alt="Calendário"/>
        </S.Input>
        <S.Input>
            <span>HORA</span>
            <input type="time" placeholder="Digite a hora HH:mm" />
            <img src={iconClock} alt="Relógio"/>
        </S.Input>

        <S.Options>
            <div>
                <input type="Checkbox" checked={done} onChange={() => setDone(!done)}/>
                <span>CONCLUÍDO</span>
            </div>
           { match.params.id && <button type="button" onClick={Remove}>EXCLUIR</button> }
        </S.Options>

        <S.Save>
            <button type="button" onClick={Save}>SALVAR</button>
        </S.Save>

      </S.Form>
      
      <Footer/>
    </S.Container>
  )
}

export default Task;
