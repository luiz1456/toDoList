import { Itarefa } from "./gerarTarefa"

export const setLocalStorage = (listaNotas: Array<Itarefa>) => {
  localStorage.setItem("tarefas", JSON.stringify(listaNotas))
}
