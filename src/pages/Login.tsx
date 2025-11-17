import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/blog');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>LogIn heree</button>
    </div>
  );
};

export default Login;
