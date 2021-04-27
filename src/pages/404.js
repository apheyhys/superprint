import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <section className="error-section bg-primary">
      <div className="content">
        <div className="container">
          <h2>
            404 Страница не найдена
            <br />
            <Link className="btn btn-outline btn-xl" to="/">
            <i className="fas fa-angle-left"></i>&nbsp;Назад
            </Link>
          </h2>
        </div>
      </div>
      <div className="overlay"></div>
    </section>  
  </Layout>
);

export default IndexPage;
