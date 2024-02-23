import { useState } from "react"
import { Itarefa, IsubTarefa } from "../../service/gerarTarefa"
import { atualizarLista } from "../../service/atualizarListaTarefas"

import styles from './subTarefasPendentes.module.css'

interface Iprops {
  subTarefa: IsubTarefa,
  subTarefasPendentes: Array<IsubTarefa>
  setSubTarefasPendentes: React.Dispatch<React.SetStateAction<Array<IsubTarefa>>>
  subTarefasConcluidas: Array<IsubTarefa>
  setSubTarefasConcluidas: React.Dispatch<React.SetStateAction<Array<IsubTarefa>>>
  tarefaAtual: Itarefa
}

export default function SubTarefasPendentes({ subTarefa, setSubTarefasPendentes, subTarefasPendentes, subTarefasConcluidas, setSubTarefasConcluidas, tarefaAtual }: Iprops) {
  const [estadoSubTarefa, setEstadoSubTarefa] = useState<boolean>(false)

  const handleDeletar = () => {
    setSubTarefasPendentes(subTarefasPendentes.filter((subTarefaAtual) => subTarefaAtual.id !== subTarefa.id))
    tarefaAtual.conteudoTarefa.pendentes = subTarefasPendentes.filter((subTarefaAtual) => subTarefaAtual.id !== subTarefa.id)
    atualizarLista({ tarefaAtual })
  }

  const handleCheck = () => {
    setEstadoSubTarefa(true)
    setTimeout(() => {
      setEstadoSubTarefa(false)
      tarefaAtual.conteudoTarefa.pendentes = subTarefasPendentes.filter((subTarefaAtual) => subTarefaAtual.id !== subTarefa.id)
      setSubTarefasPendentes(subTarefasPendentes.filter((subTarefaAtual) => subTarefaAtual.id !== subTarefa.id))
      setSubTarefasConcluidas([...subTarefasConcluidas, subTarefa])
      tarefaAtual.conteudoTarefa.concluidas = [...subTarefasConcluidas, subTarefa]
      atualizarLista({ tarefaAtual })
    }, 300
    )
  }

  return (
    <div
      className={estadoSubTarefa ? styles.tarefaConcluida : ''}
      style={{ width: '500px', display: 'flex', justifyContent: 'space-between', border: '1px solid' }}
    >
      <label style={{userSelect: 'none'}}>
        <input type="checkbox" checked={estadoSubTarefa} onChange={handleCheck} />
        {subTarefa.subTarefa}
      </label>
      <button type="button" onClick={handleDeletar} >Deletar</button>
    </div>
  )
}
