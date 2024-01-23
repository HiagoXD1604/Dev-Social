import "./leftBar.scss"
import Friends from "../../assets/1.png"
import Groups from "../../assets/2.png"
import Market from "../../assets/3.png"
import Watch from "../../assets/4.png"
import Memories from "../../assets/5.png"
import Events from "../../assets/6.png"
import Gaming from "../../assets/7.png"
import Gallery from "../../assets/8.png"
import Videos from "../../assets/9.png"
import Messages from "../../assets/10.png"
import Tutorials from "../../assets/11.png"
import Courses from "../../assets/12.png"
import Fund from "../../assets/13.png"
import { useContext } from "react"
import { AuthContext } from "../../Context/authContext"
export const LeftBar = () => {
  const {currentUser}=useContext(AuthContext);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
             {<img src={currentUser.profilePicture} alt="" />}
              <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Amigos</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Grupos</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Assista</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memorias</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Seus Atalhos</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Eventos</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Jogos</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Vídeos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Mensagens</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Outros</span>
        
          <div className="item">
            <img src={Fund} alt="" />
            <span>Levantamento de Fundos</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutoriais</span>
          </div>
          
          <div className="item">
            <img src={Courses} alt="" />
            <span>Cursos</span>
          </div>
        </div>
      </div>
    </div>
  )

}
export default LeftBar
