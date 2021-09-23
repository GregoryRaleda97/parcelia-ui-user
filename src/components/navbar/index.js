import React from 'react';
import { Button, Container, Form, Nav, Navbar, Badge } from 'react-bootstrap';
import logo from "../../asset/img/logo.png"
import { Password } from 'primereact/password';
import { Modal, ModalBody, Row, Col, FormGroup, Input, Label, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Login from "../../asset/img/login.svg";
import { Link } from "react-router-dom";
import "../navbar/navbarComp.css"
import 'react-toastify/dist/ReactToastify.css';
import { authLogin, authLogout } from "../../actions"
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SearchOutlined } from '@material-ui/icons';
import Cart from '../../asset/img/cart.svg';
import Text from '../headerText/headerText';
import User from '../../asset/img/user.svg';
import Line from '../headerLine/headerLine';
import Chat from '../../asset/img/chat.svg';
import Notif from '../../asset/img/notif.svg';

class NavbarComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false, modal: false, password: '' }
    }

    onBtLogin = () => {
        this.props.authLogin(this.inputUsername.value, this.state.password)
        this.props.history.push('/')
        this.setState({ modal: false, });
        this.setState({ password: '' });
    }

    handleLogout = () => {
        this.props.authLogout()
        this.props.history.push('/')
    }

    printLogin = () => {
        return (
            <div>
                <Modal size="lg" isOpen={this.state.modal} toggle={() => { this.setState({ modal: !this.state.modal }) }}>
                    <ModalBody>
                        <Container>
                            <Row className="box">
                                <Col md="6" className="p-0">
                                    <img src={Login} alt="login" className="img-log" style={{ objectFit: "fill", borderRadius: "15px 0px 0px 15px", width: "95%", height: "95%", position: 'relative', left: '20px', }} />
                                </Col>
                                <Col md="6" className="col2">
                                    <div className="title">
                                        <h3>Masuk ke akunmu</h3>
                                    </div>
                                    <Form>
                                        <FormGroup>
                                            <Label>Username/Email</Label>
                                            <Input type="text" innerRef={(elemen) => (this.inputUsername = elemen)} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Password</Label>
                                            <div className="p-field p-fluid">
                                                <span className="p-input-icon-left">
                                                    <i className="pi pi-lock" />
                                                    <Password value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} toggleMask />
                                                </span>
                                            </div>
                                        </FormGroup>
                                    </Form>
                                    <button onClick={() => this.onBtLogin()} className="btn-login"
                                        style={{ width: "50%", position: 'relative', top: '15px', left: '88px' }}
                                    >
                                        Masuk
                                    </button>
                                    <div className='signup__divider'>
                                        <hr /> <span>-</span> <hr />
                                    </div>
                                    <Link to="/forget-pass" className="link1" onClick={() => { this.setState({ modal: !this.state.modal }) }}><p className="b-name" style={{ position: 'relative', top: '20px', right: '115px' }}>Forgot Password?</p></Link>
                                    <p className="p-regis" style={{ color: '#5c5e62' }}>Tidak punya akun? <Link to="/regis" className="link1" onClick={() => { this.setState({ modal: !this.state.modal }) }} ><b>Create now.</b></Link></p>
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

    totalQty = () => {
        return this.props.cart.map((item, index) => {
            return item.detail.map((val, idx) => {
                return val.amount
            }).reduce((a, b) => a + b, 0)
        }).reduce((a, b) => a + b, 0)
    }

    render() {
        return (
            <div
                className="nav-page"
            >
                {this.printLogin()}
                <Navbar expand="md" >

                    <div className='nav'>
                        <Line />
                        <div>
                            <div>
                                <div className="navigation">
                                    <div className='nav_header'>
                                        <Link to='/'>
                                            <img
                                                className='nav_logoImg'
                                                src={logo}
                                                alt=''
                                            />
                                        </Link>
                                        <div className="sidebar_search">
                                            <div className="sidebar_searchContainer">
                                                <select className="select" onchange="location = this.value;">
                                                    <option>Semua Kategori</option>
                                                    <option href="regis">Syrups</option>
                                                    <option href="/">Packaging Juice</option>
                                                    <option href="/">Soft Drinks</option>
                                                    <option href="/">Chocolates</option>
                                                    <option href="/">Snacks</option>
                                                    <option href="/">Biscuits</option>
                                                    <option href="/">Blumart</option>
                                                </select>
                                                <SearchOutlined />
                                                <input placeholder="Kamu Lagi Cari Apa?" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-row">
                                        <Text />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Nav>
                            {
                                this.props.username ?
                                    <div style={{ display: 'flex', alignItems: "center" }}>
                                        <span className="material-icons">
                                            <img
                                                src={Chat}
                                                style={{
                                                    width: '120%',
                                                    position: 'relative',
                                                    right: '26px'
                                                }}
                                            />
                                        </span>
                                        <span className="material-icons">
                                            <img
                                                src={Notif}
                                                style={{
                                                    width: '120%',
                                                    position: 'relative',
                                                }}
                                            />
                                        </span>
                                        <Nav.Link style={{ display: 'flex', alignItems: 'center' }}
                                        ><span className="material-icons">
                                                <img
                                                    src={User}
                                                    style={{
                                                        width: '120%',
                                                        position: 'relative',
                                                        left: '20px'
                                                    }}
                                                />
                                            </span>
                                            <UncontrolledDropdown>
                                                <DropdownToggle DropdownToggle nav caret style={{
                                                    color: 'white',
                                                    position: 'relative',
                                                    left: '20px',
                                                    top: '2px',
                                                    fontSize: '18px',
                                                    fontWeight: '700',
                                                }}>
                                                    Hi, {this.props.username}
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    {
                                                        this.props.role === "user" ?
                                                            <>
                                                                <DropdownItem>
                                                                    <Link to="/user-profile" className="nav-link" style={{ display: 'flex' }}>
                                                                        <span class="material-icons">
                                                                            account_circle
                                                                        </span>
                                                                        Profile
                                                                    </Link>
                                                                </DropdownItem>
                                                                <DropdownItem>
                                                                    <Link to={`/user-transaction/${this.props.id}`} className="nav-link" style={{ display: 'flex' }}>
                                                                        <span class="material-icons">
                                                                            shopping_bag
                                                                        </span>
                                                                        My Order
                                                                    </Link>

                                                                </DropdownItem>
                                                                <DropdownItem onClick={this.handleLogout}>
                                                                    <Link className="nav-link" style={{ display: 'flex' }}>
                                                                        <span class="material-icons">
                                                                            logout
                                                                        </span>
                                                                        Log Out
                                                                    </Link>
                                                                </DropdownItem>
                                                            </> :
                                                            <>
                                                                <DropdownItem>
                                                                    <Link to="/user-profile" className="nav-link" style={{ display: 'flex' }}>
                                                                        <span class="material-icons">
                                                                            account_circle
                                                                        </span>
                                                                        Profile
                                                                    </Link>
                                                                </DropdownItem>
                                                                <DropdownItem onClick={this.props.authLogout}>
                                                                    <Link className="nav-link" style={{ display: 'flex' }}>
                                                                        <span class="material-icons">
                                                                            logout
                                                                        </span>
                                                                        Log Out
                                                                    </Link>
                                                                </DropdownItem>
                                                            </>
                                                    }
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </Nav.Link>
                                        <Link to={`/cart/${this.props.iduser}`}
                                            style={{
                                                textDecoration: 'none',
                                                color: 'gray',
                                                position: "relative",
                                                top: "10px",
                                                right: "300px"
                                            }}>
                                            <span className="material-icons">
                                                <img
                                                    src={Cart}
                                                    style={{
                                                        width: "65%",
                                                        position: "relative",
                                                    }}
                                                />
                                            </span><Badge
                                                className="notify-badge"
                                                style={{
                                                    color: "white",
                                                    background: 'red',
                                                    position: "relative",
                                                    bottom: "38px",
                                                    left: "20px",
                                                    borderRadius: "50px"
                                                }}>{this.totalQty()}</Badge>
                                        </Link>
                                    </div> :
                                    <div>
                                        <div>
                                            <span className="material-icons">
                                                <img
                                                    src={Cart}
                                                    style={{
                                                        width: "33%",
                                                        position: "relative",
                                                        top: "41px",
                                                        right: "230px"
                                                    }}
                                                />
                                            </span>
                                        </div>

                                        <div className="header_button_nav">
                                            <Link to='/regis'>
                                                <button className="button">Daftar</button>
                                            </Link>
                                        </div>

                                        <div className="header_button_nav1">
                                            <button
                                                className="button1"
                                                size="sm" variant="outline-secondary" onClick={() => {
                                                    this.setState({ modal: !this.state.modal });
                                                }}>
                                                Masuk
                                            </button>
                                        </div>
                                    </div>
                            }
                        </Nav>
                    </div>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = ({ authReducer }) => {
    return {
        id: authReducer.idstatus,
        username: authReducer.username,
        cart: authReducer.cart,
        iduser: authReducer.id,
        role: authReducer.role
    }
}

export default withRouter(connect(mapStateToProps, { authLogin, authLogout })(NavbarComp));