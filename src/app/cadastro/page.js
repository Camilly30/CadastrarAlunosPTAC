'use client'

import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'


export default function Cadastro() {

    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();
    const [bday, setBday] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscricao: num_inscricao,
            bdat:bday
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar, deu ruim"))
    }
    return (
        <div className={styles.formulario}>
            <form action='' onSubmit={cadastrar}>
                <h1>
                    Cadastrar
                </h1>
                <input placeholder=' NOME DO ALUNO' nome="nome" type="text"
                    onChange={e => setNome(e.target.value)}></input><br/>

                <input placeholder='CURSO' nome="curso" type="text"
                    onChange={e => setCurso(e.target.value)}></input><br/>

                <input placeholder='Nº DE INSCRIÇÃO' nome="num_inscricao" type="date"
                    onChange={e => setNum_inscricao(e.target.value)}></input><br/>

                <input placeholder='DATA DE NASCIMENTO' nome="bday" type="number"
                    onChange={e => setBday(e.target.value)}></input><br/>

                <button type='submit'>CADASTRAR</button>
                <a href='/'>Voltar</a>
            </form>
        </div>

    );

}