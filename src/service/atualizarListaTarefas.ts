import { setLocalStorage } from "./atualizarLocalStorage"
import { Itarefa } from "./gerarTarefa"

interface Iprops {
  tarefaAtual: Itarefa
}

export const atualizarLista = ({tarefaAtual}: Iprops) => {
  const listaDeTarefas = JSON.parse(localStorage.getItem('tarefas')!)

  const listaAtualizada = [...listaDeTarefas.filter((tarefa: Itarefa) => tarefa.id !== tarefaAtual.id), tarefaAtual]
  setLocalStorage(listaAtualizada)
}