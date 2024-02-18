import { Item } from "../Pages/ConteudoTarefa";
import { setLocalStorage } from "./atualizarLocalStorage";

export interface Itarefa {
    id: number;
    nome: string;
    conteudoTarefa: Array<Item>
}

interface Iprops {
    nome: string,
    setListaTarefas: React.Dispatch<React.SetStateAction< Array<Itarefa> >>
}

export const novaTarefa = (props: Iprops) => {
    
    const listaTarefasLocalStorage: Array<Itarefa> = JSON.parse(localStorage.getItem('tarefas') || '[]')
    
    const novaTarefa: Itarefa = {
        id: new Date().getTime(),
        nome: props.nome,
        conteudoTarefa: []
    }

    listaTarefasLocalStorage.push(novaTarefa)
    setLocalStorage(listaTarefasLocalStorage)
    props.setListaTarefas(listaTarefasLocalStorage)
}