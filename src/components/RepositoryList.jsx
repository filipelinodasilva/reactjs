import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

// useEffect serve para disparar uma função quando algo(Variavel mudou, disparo de funcção  etc) acontecer na aplicação

import '../styles/repositories.scss';

// api.github.com/orgs/rocketseat/repos

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://www.agencialinoo.com.br/consultoria'
}

export function RepositoryList() {
    // Estado que Armazena uma Listagem de Repositorios
    const [repositories, setRepositories] = useState([]);

    // useEffect sempre vai precisar de dois parametros
    // useEffect utilizado para chamada da API para requisição dos dados do GitHub da Rocketseat
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">

            <h1>Lista de repositorios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}