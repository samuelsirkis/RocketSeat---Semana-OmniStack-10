import React from 'react'

import './Styles.css'

function DevItem({dev, deleteDev}){  
    return (
        <li className="dev-item">
            <header>
              <img src={dev.avatar_url} alt={dev.name} />
              <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
              </div>
              <span className="dev-item-delete" onClick={() => deleteDev(dev.github_username)}>
                x
                </span>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil GitHub</a>
          </li>
    )
}

export default DevItem