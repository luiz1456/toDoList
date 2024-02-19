import { Link } from "react-router-dom";
import { Itarefa } from "../../service/gerarTarefa"
import InputItemTarefa from "../../components/InputItemTarefa";
import ItemTarefa from "../../components/itemTarefa";
import { useState } from "react";

export type Item = {
  id: number
  item: string
  concluido: boolean
}

export function ConteudoTarefa() {
  const params = new URL(window.location.href)
  const listaDeTarefas: Array<Itarefa> = JSON.parse(localStorage.getItem('tarefas') || '[]')
  const tarefaAtual: Itarefa = listaDeTarefas.find(tarefa => params.pathname === `/toDoList/tarefa/${tarefa.id}`)!
  const [listaItens, setListaItens] = useState(tarefaAtual.conteudoTarefa as Array<Item>)

  return (
    <div className="limitarLargura">
      <Link to={'/'}>voltar</Link>
      <div>
        <h1>{tarefaAtual?.nome}</h1>
      </div>

      <InputItemTarefa
        tarefaAtual={tarefaAtual}
        setListaItens={setListaItens}
      />

      {listaItens.map((Item, i) => {
        
        return (
          <ItemTarefa
            key={i}
            Item={Item}
            listaItens={listaItens}
            setListaItens={setListaItens}
            tarefaAtual={tarefaAtual}
          />
        )
      })}

    </div>
  )
} 