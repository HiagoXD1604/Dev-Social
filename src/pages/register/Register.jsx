import { Link } from "react-router-dom"
import "./register.scss"

export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Dev Social</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis soluta amet reiciendis similique sit ea error aperiam culpa optio labore dolore eos, repellendus ex ab molestiae in, debitis odit veritatis.
          </p>
          <span>Você tem uma Conta?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Nome" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Register
