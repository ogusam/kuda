import {Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
function Header() {
    return(
        <div>
            <Nav>
                <Nav.Item>
                    <LinkContainer to= "/">
                        <Nav.Link>Kuda</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to= "/personal">
                        <Nav.Link>Personal</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to= "/bussiness">
                        <Nav.Link>Bussiness</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to= "/company">
                        <Nav.Link>Company</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to= "/help">
                        <Nav.Link>Help</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to= "/bussiness">
                        <Nav.Link>Personal</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="Authbox">
                        <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                
                


            </Nav>
        </div>
    )
}

export default Header;