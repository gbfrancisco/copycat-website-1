import Header from './components/common/Header.tsx';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
