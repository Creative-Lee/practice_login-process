import { Route, Routes } from 'react-router-dom';
import { LoginForm, NavMenu } from './pages';
import '../index.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavMenu />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
