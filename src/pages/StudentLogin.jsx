import "./StudentLogin.css"
import aimLogo from "../assets/images/aim-logo.png"
import crestLogo from "../assets/images/school-crest.png"

export default function StudentLogin() {
    return (
        <div className="login-page">

            <div className="login-card">

                {/* LEFT SIDE */}
                <div className="login-left">
                    <img src={aimLogo} alt="AIM Logo" className="aim-logo" />

                    <h2>Academic Info Manager</h2>

                    <p>
                        You can also access the Student Portal on your mobile phone.
                        <br />
                        <span className="download-link">Download App</span>
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="login-right">

                    <img src={crestLogo} alt="School Crest" className="crest-logo" />
                    <h3>Login</h3>

                    <form>

                        <label>Username</label>
                        <input type="text" placeholder="eg. username" />

                        <label>Password</label>
                        <input type="password" placeholder="Enter password" />
                        <div className="forgot-password">Forgot password?</div>

                        <label>Student ID</label>
                        <input type="text" placeholder="eg. 00000000" />

                        <button type="submit" className="login-btn">
                            Log In
                        </button>

                        <p className="help-text">
                            Having issues accessing your portal?
                            <span>Create a ticket</span>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    )
}
