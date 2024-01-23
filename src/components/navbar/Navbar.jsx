import "./navBar.scss"
import { Link } from "react-router-dom"
import HomeOutlinedIcon from "@mui/icons-material/HomeMaxOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined"
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"
import  EmailOutlinedIcon  from "@mui/icons-material/EmailOutlined"
import PersonOutlineIcon  from "@mui/icons-material/PersonOutline"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import  NotificationsOutlined from "@mui/icons-material/NotificationsOutlined"
import { useContext } from "react"
import { DarkModeContext } from "../../Context/darkModeContext"
import { AuthContext } from "../../Context/authContext"


export const Navbar = () => {

  const {toogle,darkMode} = useContext(DarkModeContext)

  const {currentUser}=useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="left">
      
        <Link to="/" style={{textDecoration:"none"}}>
          <span>Dev Social</span>
        </Link>
          <HomeOutlinedIcon/>
          {darkMode? <DarkModeOutlinedIcon onClick={toogle} />:<WbSunnyOutlinedIcon onClick={toogle} />}
          <GridViewOutlinedIcon/>
          <div className="search">
            <SearchOutlinedIcon/>
            <input type="text" placeholder="Pesquisar..." />
          </div>
      </div>
      <div className="right">
        <PersonOutlineIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlined/>
        <div className="user">
          {<img src={currentUser.profilePicture}alt="" />}
          <span>{currentUser.name}</span>
        </div>
      </div>

    </div>
  )
}
export default Navbar
