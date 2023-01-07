import './styles.css';

export function Home() {
  return (
    <div className='container'>
      <h1>Lista de presença</h1>
      <input type="text" placeholder="digite seu nome..."/>
      <button type="button">Adicionar</button>
    </div>
  )
}

export default Home