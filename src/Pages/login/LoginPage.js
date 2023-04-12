import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const LoginPage = () => {
    return (
        <Container fluid className="p-0 m-0">
            <Row className="m-0">
                <Col xs={12} md={7} className="p-0">
                    <div className="h-100 position-relative">
                        <img src="https://terrains.chimatchapp.com/storage/app/uploads/public/63e/d31/7b8/63ed317b8f8be776980643.jpg" className="w-100 h-100  top-0 start-0"  />
                    </div>
                </Col>
                <Col xs={11} md={5} className="pt-5">
                    <div className='pt-5 mt-5 px-5 mx-5 '>
                        <img  src="https://kooraland.chimatchapp.com/img/logo-light.png" className="w-50 h-50 pt-4 mx-2"/>
                    </div>

                    <div className='d-flex flex-column justify-content-center h-custom-2 w-100 px-5'>

                        <p class=" px-3 mx-5  mt-3  mb-5 !font-light text-gray-600">Bienvenue sur votre compte</p>
                        <Form >
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput"
                                       placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email </label>
                            </div>
                            <div className="form-floating mb-2">
                                <input type="password" className="form-control" id="floatingPassword"
                                       placeholder="Password"/>
                                <label htmlFor="floatingPassword">Mot de passe </label>
                            </div>
                            <p class="small  mb-1 text-end "><a  href="/forgot-password">Mot de passe oubliée ?</a></p>

                            < Button  className=" mx-4 mt-4 rounded-pill btn btn-success"  size='sm'>Se connecter </ Button >
                        </Form>

                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;
