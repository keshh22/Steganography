import {Routes, Route, useNavigate} from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/contacts');
  };

  const navigateHome = () => {

    navigate('index.html');
  };

  return (
    <div>
      <div>
        <button onClick={navigateHome}>Home</button>
       

        <Routes>
       
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}