import { atualizarLista } from "../../service/atualizarListaTarefas"
import { IsubTarefa, Itarefa } from "../../service/gerarTarefa"

interface Iprops {
  subTarefa: IsubTarefa
  tarefaAtual: Itarefa
  subTarefasConcluidas: Array<IsubTarefa>
  setSubTarefasConcluidas: React.Dispatch<React.SetStateAction<Array<IsubTarefa>>>
  subTarefasPendentes: Array<IsubTarefa>
  setSubTarefasPendentes: React.Dispatch<React.SetStateAction<Array<IsubTarefa>>>
}

export default function SubTarefasConcluidas({ subTarefa, tarefaAtual, subTarefasConcluidas, setSubTarefasConcluidas, subTarefasPendentes, setSubTarefasPendentes }: Iprops) {
  const handleCheck = () => {
    tarefaAtual.conteudoTarefa.concluidas = subTarefasConcluidas.filter((subTarefaAtual) => subTarefaAtual.id !== subTarefa.id)
    setSubTarefasConcluidas(subTarefasConcluidas.filter((subTarefaAtual) => subTarefaAtual.id !== subTarefa.id))
    setSubTarefasPendentes([...subTarefasPendentes, subTarefa])
    tarefaAtual.conteudoTarefa.pendentes = [...subTarefasPendentes, subTarefa]
    atualizarLista({ tarefaAtual })
  }

  return (
    <div
      style={{ width: '500px', display: 'flex', justifyContent: 'space-between', border: '1px solid', userSelect: 'none' }}
      onClick={handleCheck}
    >
      <input type="checkbox" checked={true} readOnly />
      {subTarefa.subTarefa}
    </div>
  )
}
