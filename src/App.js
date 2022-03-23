import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container,
         Nav,
         NavItem,
         NavLink,
         Row,
         Col
} from "reactstrap";
import './App.css';

function App() {
  return (
    <Router>
      <Container>
        <Nav>
          <NavItem>
            <NavLink href="/">
              Home
            </NavLink>
          </NavItem>
        </Nav>
        <Row>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
