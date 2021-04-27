import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/new-age.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet        
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'SuperPrint - производство наружной рекламы. Изготовление информационных табличек, вывесок, стендов, штендеров. Световые буквы и лайтбоксы, широкоформатная интерьерная печать на баннере и плёнке, плоттерная резка' },
                { name: 'keywords', content: 'SuperPrint, наружная реклама, информационные таблички, световые буквы, лайтбоксы, широкоформатная интерьерная печать, плоттерная резка' },
              ]}    
            >
              <html lang="ru" />
            </Helmet>
            <div className={'page-top'}>{children}</div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
  noHeader: PropTypes.bool,
  noSiteHeader: PropTypes.bool,
  activeLink: PropTypes.string,
};

export default Layout;
