import {Link} from 'react-router-dom'; 
function Login() {
    return (
        <div>
            <h1>This is login</h1>
            <p>Enter user id and password</p>
            <Link to="/register">Register</Link>
        </div>
    )
}

export default Login;
