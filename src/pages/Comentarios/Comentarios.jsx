import { useState, useEffect } from 'react'
import Header from '../../Componentes/Header/Header'
import { FiTrash2, FiPlus } from 'react-icons/fi'
import Footer from '../../Componentes/Footer/Footer'

import './Comentarios.css'

function Comentarios() {
  const getLocalList = () => {
    let items = localStorage.getItem('list')
    if(items) {
      return JSON.parse(localStorage.getItem('list'))
    } else {
      return []
    }
  }
  const [list, setList] = useState(getLocalList)
  const [newItem, setNewItem] = useState('')

  function handleCreateNewItem() {
    const item = {
      id: Math.random(),
      title: newItem
    }

    if (item.title === '') {
      return
    }

    setList([...list, item])
    setNewItem('')
  }

  function handleRemoveItem(id) {
    const itemsFiltered = list.filter(item => item.id !== id)
    setList(itemsFiltered)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return(
  <>
    <Header> </Header>
      
      <div className='div__btn'>
      <button class= "main__btn">
      <a href="#">Faça a sua denúncia!</a>
      </button>
      </div>

      <h1> Dúvidas, comentários e sugestões:</h1>
    
    <section className="list">
      <header>
        <div className="input-container">
          <input 
            type="text"
            placeholder="Digite aqui seu comentário"
            onChange={(e) => setNewItem(e.target.value)}
            value={newItem}
          />
          <div className="add-container">
            <button 
              className="add-task" 
              type="submit" 
              onClick={handleCreateNewItem}
              >
            Enviar!
            </button>
          </div>
        </div>
      </header>
      <main>
        <ul className="list-items">
          {
            list.map(item => {
              return(
                <li key={item.id}>
                  <div>
                    <p>{item.title}</p>
                  </div>
                  <button 
                    className="remove-task" 
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FiTrash2 size={16} />
                  </button>
                </li>
              )
            })
          }
        </ul>
      </main> 
    </section>
     
     <footer>
     <Footer> Projeto Final desenvolvido por Ayane Martins | Aluna Reprograma - On17 | 2022 </Footer>
     </footer>
    
  </>
  
 )
}

export default Comentarios