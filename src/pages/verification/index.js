import React from 'react';
import { Button, Col, Container, Row, Spinner } from 'reactstrap';
import otp1 from '../../asset/img/otp1.jpg';
import { InputText } from 'primereact/inputtext';
import "../verification/verificationPage.css"
import axios from 'axios';
import { URL_API } from '../../helper';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

toast.configure()

class VerificationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: '',
            alert: false,
            loading: false
        }
    }

    verify = () => {
        let code = this.state.otp
        let headers = {
            headers: {
                'Authorization': `Bearer ${this.props.location.pathname.split('/')[2]}`
            }
        }
        console.log("OTP", code)
        console.log(headers)
        this.setState({ loading: true })
        axios.patch(URL_API + `/auth/verify`, {
            otp: code
        }, headers)
            .then(res => {
                this.setState({ loading: false })
                console.log(res.data)
                toast.success('Hey 👋 Verification Success!', { position: toast.POSITION.TOP_CENTER, autoClose: 3000 })
                this.props.history.push('/')
            }).catch(err => {
                console.log(err)
                toast.error('Verification Failed!', { position: toast.POSITION.TOP_CENTER, autoClose: 3000 })
                this.setState({ loading: false })
            })
    }
    render() {
        console.log(this.props.location.pathname.split('/')[2])
        return (
            <div>
                <Container>
                    <Row className="mt-5 box">
                        <Col md="6" className="p-0">
                            <img className="img" src={otp1} alt="verification" />
                        </Col>
                        <Col md="6" className="col2">
                            <h6>Forgot Password</h6>
                            <h4>Account Verification!</h4>
                            <br></br>
                            <div className="p-field p-fluid input">
                                <label className="p-d-block label">Verification Code</label>
                                <div>
                                    <span className="p-input-icon-left">
                                        <i className="pi pi-google" />
                                        <InputText value={this.state.otp} onChange={(e) => this.setState({ otp: e.target.value })} />
                                    </span>
                                </div>
                            </div>

                            <Button onClick={() => this.verify()} style={{ background: '#FAB629' }} className="btncustom3" color="warning">
                                {this.state.loading === true ? <Spinner color="secondary" style={{ alignItems: 'center' }} /> : <span>Submit</span>}
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(VerificationPage);