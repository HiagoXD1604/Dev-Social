import "./rightBar.scss"

export const RightBar = () => {
  return (
    <div className="rightBar"> 
      <div className="container">
        <div className="item">
          <span>Sugestões para Você</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19550510/pexels-photo-19550510/free-photo-of-adulto-bebida-drink-expressao-facial.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <span>Igor Cavalera</span>
            </div>
            <div className="buttons">
              <button>Seguir</button>
              <button>Deixar</button>
            </div>    
          </div>
        </div>
        <div className="item">
          <span>últimas atividades</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19550510/pexels-photo-19550510/free-photo-of-adulto-bebida-drink-expressao-facial.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <p>
                <span>Igor Cavalera</span>
                Mudou sua foto de Perfil
              </p>
            </div>
            <div className="buttons">
              <span>1 minuto atrás</span>
            </div>  
            
          </div>
        </div>
        <div className="item">
          <span>Amigos Online</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19550510/pexels-photo-19550510/free-photo-of-adulto-bebida-drink-expressao-facial.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online"/>
              <span>Michael Jackson</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19550510/pexels-photo-19550510/free-photo-of-adulto-bebida-drink-expressao-facial.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online"/>
              <span>Michael Jackson</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19550510/pexels-photo-19550510/free-photo-of-adulto-bebida-drink-expressao-facial.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online"/>
              <span>Michael Jackson</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19550510/pexels-photo-19550510/free-photo-of-adulto-bebida-drink-expressao-facial.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online"/>
              <span>Michael Jackson</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/19550510/pexels-photo-19550510/free-photo-of-adulto-bebida-drink-expressao-facial.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online"/>
              <span>Michael Jackson</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
