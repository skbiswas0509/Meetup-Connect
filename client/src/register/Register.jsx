import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Meetup Connect</h3>
                <span className="loginDesc">Register From Here</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Password Again" className="loginInput" />
                    <button className="loginButton">SignUp</button>

                    <button className="loginRegisterButton">Log into your account</button>
                </div>
            </div>
        </div>
        </div>
  )
}
