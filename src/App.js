import './App.css';
import Container from '@material-ui/core/Container'
import Nav from './components/Nav'
// import Drawer from './components/Drawer'
import Home from './components/Home'

function App() {
  return (
    <Container 
      disableGutters={true}
      maxWidth="xl"
      >
      <Nav>
      
      </Nav>
      {/* <Drawer /> */}
      <Home />
    </Container>
  );
}

export default App;
