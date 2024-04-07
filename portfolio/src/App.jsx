import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LofiBackground from './assets/LofiBackground.jpg';
function App() {
  const styles = {
    main: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${LofiBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'full',
      height: '80vh',
      display:"flex",
      alignItems:"center",
    },
  }
  return (
    <>
      <Header />
      <main style={styles.main}>
        <Outlet />
      </main>
    </>
  )
}

export default App
