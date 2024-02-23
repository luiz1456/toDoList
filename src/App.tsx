import { useState } from "react"
import Header from "./components/Header"
import Input from "./components/InputNovaTarefa"
import { Itarefa } from "./service/gerarTarefa"
import { Link } from "react-router-dom"
import { deletarTarefa } from "./service/deletarTarefa"
import styles from './App.module.css'

function App() {
  const listaTarefasLocalStorage: Array<Itarefa> = JSON.parse(localStorage.getItem('tarefas') || '[]')
  const [listaTarefas, setListaTarefas] = useState(listaTarefasLocalStorage)
  const [abrirInputNovaTarefa, setAbrirInputNovaTarefa] = useState(false)

  return (
    <>
      <Header />
      {abrirInputNovaTarefa && <Input
        setListaTarefas={setListaTarefas}
        setAbrirInputNovaTarefa={setAbrirInputNovaTarefa}
      />}
      <div className="limitarLargura">
        <button
          type="button"
          onClick={() => setAbrirInputNovaTarefa(!abrirInputNovaTarefa)}>
          {abrirInputNovaTarefa ? 'Cancelar' : 'Nova Tarefa'}
        </button>
        <div className={styles.containerNotas}>
          {listaTarefas.map((tarefa: Itarefa) => {
            return (
              <div className={styles.notas} key={tarefa.id}>
                <div className={styles.corpoNota}>
                  <h3>{tarefa.nome}</h3>
                </div>
                <div className={styles.containerBotoes}>
                  <Link to={`tarefa/${tarefa.id}`}>ver tarefa</Link>
                  <button onClick={() => deletarTarefa({ listaTarefas, setListaTarefas }, tarefa.id)}>apagar</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App