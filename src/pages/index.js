import {graphql} from "gatsby"
import React from 'react';
import Helmet from 'react-helmet';

import Carousel from '../components/Carousel'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import ContactForm from '../components/Mailphoneform'

export const projectsQuery = graphql `
query MyQuery {
  extradataJson {
    address
    email
    id
    masterheadh1
    masterheadp1
    masterheadp2
    masterheadp3
    masterheadp4
    servicesh1
    servicesextra
    servicesli1
    servicesli2
    phone
    servicesli3
  }
}
`;

const IndexPage = ({data}) => (
    <Layout>
        <Header/>
        <header className="masthead" id="tophead">
            <div className="d-none">
                <Helmet>
                    <script
                        id="rhlpscrtg"
                        type="text/javascript"
                        charset="utf-8"
                        async="async"
                        src="https://web.redhelper.ru/service/main.js?c="></script>
                </Helmet>
                <a className="rc-copyright" href="http://redconnect.ru">Сервис обратного звонка RedConnect</a>
            </div>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-10">
                                {data.extradataJson.masterheadh1}
                            </h1>
                            <p>{data.extradataJson.masterheadp1}</p>
                            <p>{data.extradataJson.masterheadp2}</p>
                            <p>{data.extradataJson.masterheadp3}</p>
                            <p>{data.extradataJson.masterheadp4}</p>
                            <div className="">
                                <i className="fas fa-phone-square-alt"></i>
                                <strong>&nbsp;{data.extradataJson.phone}</strong>
                            </div>
                            <div className="pb-2">
                                <i className="fas fa-envelope-square"></i>
                                <strong>&nbsp;{data.extradataJson.email}</strong>
                            </div>
                            <div>
                                <a href="#submitapplication" className="btn btn-primary" role="button">Оставить заявку</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className="bg-primary text-center" id="submitapplication">
            <div className="container">
                <div className="section-heading text-center">
                    <h2>Оставить заявку</h2>
                    <hr/>
                    <div className="col-sm-6 d-block mx-auto mt-5">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
        <section className="text-center" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h2 className="section-heading ">
                            Наши услуги
                        </h2>
                        <hr/>
                        <p className="mt-5">
                            <strong>{data.extradataJson.servicesh1}</strong>
                        </p>
                        <ul className="text-left fa-ul">
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-angle-double-right"></i>
                                </span>{data.extradataJson.servicesli1}</li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-angle-double-right"></i>
                                </span>{data.extradataJson.servicesli2}</li>
                            <li>
                                <span className="fa-li">
                                    <i className="fas fa-angle-double-right"></i>
                                </span>{data.extradataJson.servicesli3}</li>
                        </ul>
                        <p className="text-left">
                            <strong>{data.extradataJson.servicesextra}</strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="features bg-primary" id="samples">
            <div className="container">
                <div className="section-heading text-center">
                    <h2>Примеры работ</h2>
                    <hr/>
                    <div className="col-sm-8 d-block mx-auto mt-5">
                        <Carousel/>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact" id="contact">
            <div className="container">
                <h2>
                    Контакты
                </h2>
                <hr/>
                <div className="row mt-5">
                    <div className="col-sm-6 mb-4 y-maps">
                        <Contact/>                          
                    </div>
                    <div className="col-sm-6">
                        <address>
                            <p className="text-left mb-1">
                                <strong>Адрес производства:</strong>
                            </p>
                            <p className="text-left">{data.extradataJson.address}</p>
                            <p className="text-left mb-1">
                                <strong>Телефон:</strong>
                            </p>
                            <p className="text-left">{data.extradataJson.phone}</p>
                            <p className="text-left mb-1">
                                <strong>E-mail:</strong>
                            </p>
                            <p className="text-left">{data.extradataJson.email}</p>
                        </address>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </Layout>
);

export default IndexPage;
