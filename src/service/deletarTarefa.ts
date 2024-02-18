import { Itarefa } from "./gerarTarefa"
import { setLocalStorage } from './atualizarLocalStorage'

interface Iprops {
  listaTarefas: Array<Itarefa>,
  setListaTarefas: React.Dispatch<React.SetStateAction<Array<Itarefa>>>
}

export const deletarTarefa = (props: Iprops, id: number) => {
  const novaLista = props.listaTarefas.filter(nota => nota.id !== id)
  props.setListaTarefas(novaLista)
  setLocalStorage(novaLista)
}