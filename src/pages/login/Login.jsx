import { Link } from "react-router-dom"
import "./login.scss"
import { useContext } from "react"
import { AuthContext } from "../../Context/authContext"

export const Login = () => {

  const {login} = useContext(AuthContext)
  const handleLogin = () =>{
    login();
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Olá Mundo.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis soluta amet reiciendis similique sit ea error aperiam culpa optio labore dolore eos, repellendus ex ab molestiae in, debitis odit veritatis.
          </p>
          <span>Não tem uma conta?</span>
          <Link to="/register">
          <button>Registre-se</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
