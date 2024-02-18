import { useState } from "react"
import { Item } from "../../Pages/ConteudoTarefa"
import { Itarefa } from "../../service/gerarTarefa"
import { atualizarLista } from "../../service/atualizarListaTarefas"

interface Iprops {
  Item: Item,
  listaItens: Array<Item>
  setListaItens: React.Dispatch<React.SetStateAction<Array<Item>>>
  tarefaAtual: Itarefa
}

export default function ItemTarefa({ Item, setListaItens, listaItens, tarefaAtual }: Iprops) {
  const [estadoItem, setEstadoItem] = useState<boolean>(Item.concluido)
  
  const handleDeletar = () => {
    setListaItens(listaItens.filter((ItemAtual) => ItemAtual.id !== Item.id))
    console.log(Item.concluido, 'ssssssssss')
    tarefaAtual.conteudoTarefa = listaItens.filter((ItemAtual) => ItemAtual.id !== Item.id)
    console.log(tarefaAtual.conteudoTarefa,'ddddd')

    // tarefaAtual.conteudoTarefa.map(item => {
    //     setEstadoItem(item.concluido)
    // })

    atualizarLista({ tarefaAtual })
  }

  const handleCheck = () => {
    setEstadoItem(!Item.concluido)
    const conteudoTarefaAtualizado = tarefaAtual.conteudoTarefa.map(item => {
      if(item.id !== Item.id ) {
        return item;
      } else {
        return {...item,concluido : !item.concluido}
      }
    })
    tarefaAtual.conteudoTarefa = conteudoTarefaAtualizado
    atualizarLista({ tarefaAtual })
  }

  return (
    <div style={{ width: '500px', display: 'flex', justifyContent: 'space-between' }}>
      <label>
        <input
          type="checkbox"
          checked={estadoItem}
          onChange={handleCheck}
        />
        {Item.item}
      </label>
      <button type="button" onClick={handleDeletar} >Deletar</button>
    </div>
  )
}
