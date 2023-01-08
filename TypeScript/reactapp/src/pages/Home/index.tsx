import React, { useState, useEffect } from 'react';
import './styles.css';
import {Card, CardProps} from '../../componentes/card/index'// Importando a tipagem do CardProps

type Students = Array<CardProps>;
type ProfileResponse = {
  key?: number;
  name: string;
  avatar_url: string;
}
type User = {
  key?: number;
  name: string;
  avatar: string; 
}

export function Home() {
  
  const [studentName, setStudentName] = useState<string>();
  const [students, setStudents] = useState<Students>([]); // Dizendo que é um array de CardProps
  const [user, setUser] = useState<User>({} as User);

  function createId(): number {
    const newId =  Math.floor((Math.random() * 1000) - (Math.random() * 100));
    return newId;
  }

  function handleAddStudent() {
      const newStudent = {
        key: createId(),
        name: studentName,
        time: new Date().toLocaleTimeString("pt-br", {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      }
      setStudents((prevState: any) => [...prevState, newStudent]);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/devMRNGN");
      const data = await response.json() as ProfileResponse;
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      }) 
    }
    fetchData();
  },[])

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil"/>
        </div>
      </header>

      <input type="text" placeholder="digite seu nome..."onChange={e => setStudentName(e.target.value)}/>

      <button type="button" onClick={handleAddStudent}>Adicionar</button>

      {students.map(student => <Card key={student.key} name={student.name} time={student.time}/>)}
    </div>
  );
}


export default Home;
