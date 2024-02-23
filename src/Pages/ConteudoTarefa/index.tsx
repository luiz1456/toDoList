import { Link } from "react-router-dom";
import { Itarefa } from "../../service/gerarTarefa"
import InputSubTarefa from "../../components/InputSubTarefa";
import SubTarefasPendentes from "../../components/subTarefasPedentes";
import SubTarefasConcluidas from "../../components/subTarefasConcluidas";
import { useState } from "react";

export function ConteudoTarefa() {
  const params = new URL(window.location.href)
  const listaDeTarefas: Array<Itarefa> = JSON.parse(localStorage.getItem('tarefas') || '[]')
  const tarefaAtual: Itarefa = listaDeTarefas.find(tarefa => params.hash === `#/tarefa/${tarefa.id}`)!
  const [subTarefasPendentes, setSubTarefasPendentes] = useState(tarefaAtual.conteudoTarefa.pendentes)
  const [subTarefasConcluidas, setSubTarefasConcluidas] = useState(tarefaAtual.conteudoTarefa.concluidas)

  return (
    <div className="limitarLargura">
      <Link to={'/'}>voltar</Link>
      <div>
        <h1>{tarefaAtual?.nome}</h1>
      </div>

      <InputSubTarefa
        tarefaAtual={tarefaAtual}
        setSubTarefasPendentes={setSubTarefasPendentes}
      />

      <div className="pendentes">
        <h2>Pendentes</h2>
        {subTarefasPendentes.map((subTarefa, i) => {

          return (
            <SubTarefasPendentes
              key={i}
              subTarefa={subTarefa}
              subTarefasPendentes={subTarefasPendentes}
              setSubTarefasPendentes={setSubTarefasPendentes}
              subTarefasConcluidas={subTarefasConcluidas}
              setSubTarefasConcluidas={setSubTarefasConcluidas}
              tarefaAtual={tarefaAtual}
            />
          )
        })}
      </div>
      <div className="concluidas">
        <h2>concluidas</h2>
        {subTarefasConcluidas.map((subTarefa, i) => {

          return (
            <SubTarefasConcluidas
              key={i}
              subTarefa={subTarefa}
              subTarefasConcluidas={subTarefasConcluidas}
              setSubTarefasConcluidas={setSubTarefasConcluidas}
              subTarefasPendentes={subTarefasPendentes}
              setSubTarefasPendentes={setSubTarefasPendentes}
              tarefaAtual={tarefaAtual}
            />
          )
        })}
      </div>
    </div>
  )
} 