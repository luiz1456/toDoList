import { Itarefa, IsubTarefa } from "../../service/gerarTarefa"
import { FormEvent, useState } from 'react';
import { atualizarLista } from "../../service/atualizarListaTarefas";

type Iprops = {
  tarefaAtual: Itarefa
  setSubTarefasPendentes: React.Dispatch<React.SetStateAction<Array<IsubTarefa>>>
}

export default function InputSubTarefa({ tarefaAtual, setSubTarefasPendentes }: Iprops) {
  const [valorInput, setValorInput] = useState('')

  const handleChange = (textoInput: string) => {
    setValorInput(textoInput)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addSubTarefa(valorInput)
    setValorInput('')
  }

  const addSubTarefa = (subTarefa: string) => {
    const novaSubTarefa: IsubTarefa = { id: new Date().getTime(), subTarefa: subTarefa }
    tarefaAtual.conteudoTarefa.pendentes.push(novaSubTarefa)
    setSubTarefasPendentes([...tarefaAtual.conteudoTarefa.pendentes])
    atualizarLista({tarefaAtual})
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name='conteudoSubTarefa'
        value={valorInput}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="submit">v</button>
    </form>
  )
}