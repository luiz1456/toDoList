import { setLocalStorage } from "./atualizarLocalStorage";

export interface IsubTarefa {
    id: number
    subTarefa: string
}

export interface IconteudoTarefa {
    pendentes: IsubTarefa[]
    concluidas: IsubTarefa[]
}

export interface Itarefa {
    id: number;
    nome: string;
    conteudoTarefa: IconteudoTarefa
}

interface Iprops {
    nome: string,
    setListaTarefas: React.Dispatch<React.SetStateAction<Array<Itarefa>>>
}

export const novaTarefa = (props: Iprops) => {

    const listaTarefasLocalStorage: Array<Itarefa> = JSON.parse(localStorage.getItem('tarefas') || '[]')

    const novaTarefa: Itarefa = {
        id: new Date().getTime(),
        nome: props.nome,
        conteudoTarefa: {
            pendentes: [],
            concluidas: []
        }
    }

    listaTarefasLocalStorage.push(novaTarefa)
    setLocalStorage(listaTarefasLocalStorage)
    props.setListaTarefas(listaTarefasLocalStorage)
}