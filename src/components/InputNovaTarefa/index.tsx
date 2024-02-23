import { FormEvent, useState } from "react"
import { novaTarefa } from "../../service/gerarTarefa"
import { Itarefa } from "../../service/gerarTarefa"

import styles from './InputNovaTarefa.module.css'

interface Iprops {
    setListaTarefas: React.Dispatch<React.SetStateAction<Array<Itarefa>>>
    setAbrirInputNovaTarefa: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Input ({ setListaTarefas, setAbrirInputNovaTarefa }: Iprops) {
    const [nomeTarefa, setNomeTarefa] = useState<string>('')
    const [mensagemErro, setMenssagemErro] = useState<string>('')

    const handleInputNomeTarefa = (textoInput: string) => {
        setNomeTarefa(textoInput)
        if (nomeTarefa.trim()) {
            setMenssagemErro('')
        }
    }
    const handleCriarTarefa = (nome: string, event: FormEvent) => {
        event.preventDefault()
        if (nomeTarefa.trim()) {
            novaTarefa({ nome, setListaTarefas })
            setAbrirInputNovaTarefa(false)
            setNomeTarefa('')

        } else {
            setMenssagemErro('É nescessário um nome!')
        }
    }

    return (
        <form
            className={`limitarLargura ${styles.containerInputs}`}
            onSubmit={(event) => handleCriarTarefa(nomeTarefa, event)}
        >
            <label>Nome da Tarefa:</label>
            <div className={styles.form}>
                <input
                    type="text"
                    value={nomeTarefa}
                    onChange={(e) => handleInputNomeTarefa(e.target.value)}
                    placeholder="Ex: Lista de compras"
                    autoFocus
                />
                <button
                    className={styles.botao}
                    type="submit"
                >criar</button>
            </div>
            <p className={styles.menssagemErro}>{mensagemErro}</p>
        </form>
    )
}
