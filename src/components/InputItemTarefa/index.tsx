import { Itarefa } from "../../service/gerarTarefa"
import { FormEvent, useState } from 'react';
import { Item } from "../../Pages/ConteudoTarefa";
import { atualizarLista } from "../../service/atualizarListaTarefas";


type Iprops = {
  tarefaAtual: Itarefa
  setListaItens: React.Dispatch<React.SetStateAction<Array<Item>>>
}

export default function InputItemTarefa({ tarefaAtual, setListaItens }: Iprops) {
  const [valorInput, setValorInput] = useState('')

  const handleChange = (textoInput: string) => {
    setValorInput(textoInput)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addItem(valorInput)
    setValorInput('')
  }

  const addItem = (item: string) => {
    const novoItem: Item = { id: new Date().getTime(), item: item, concluido:false }
    tarefaAtual.conteudoTarefa.push(novoItem)
    setListaItens([...tarefaAtual.conteudoTarefa])
    atualizarLista({tarefaAtual})
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name='conteudoItem'
        value={valorInput}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="submit">v</button>
    </form>
  )
}
