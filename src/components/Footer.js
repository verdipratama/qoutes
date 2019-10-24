import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <p style={{ fontSize: '20px' }}>
          &copy; {new Date().getFullYear()} <a href="https://www.verside.com">Qoutes 2.0 Inc.</a> —{' '}
          <a
            href="https://github.com/verdipratama"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
          >
            Made with love by Verdi Pratama{' '}
            <span style={{ color: 'red' }} role="img" aria-label="love">
              💕
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
