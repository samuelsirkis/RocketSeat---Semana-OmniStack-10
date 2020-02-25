import React, { useState, useEffect } from 'react'
import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevForm from './components/DevForm'
import DevItem from './components/DevItem'

//Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Propriedade: Informações que o componente PAI passa para o componente FILHO
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('./devs')

      setDevs(response.data)
    }
    loadDevs()
  }, [])
  async function handleAddDev(devData) {
    const { data: newDev } = await api.post('/devs', devData);

    const devIndex = devs.findIndex(
      dev => dev.github_username === newDev.github_username
    );

    if (devIndex === -1) {
      setDevs([...devs, newDev]);
    }
  }

  async function handleRemoveDev(username) {
    const response = await api.delete(`/devs/${username}`);

    if (response.status === 204) {
      const newDevs = devs.filter(dev => dev.github_username !== username);

      setDevs(newDevs);
    }
  }

  // async function handleAddDev(data) {
  //   const response = await api.post('/devs', data);
  //   const hasDev = devs.filter(dev => dev.github_name === data.github_name);

  //   if (!hasDev) {
  //     setDevs([...devs, response.data])
  //   }
  // }


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        {devs.length > 0 ? (
          <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} deleteDev={handleRemoveDev} />
          ))}
        </ul>
        ) :(
          <p>Nenhuem desenvolvedor cadastrado.</p>
        )}
      </main>
    </div>
  )
}

export default App;
