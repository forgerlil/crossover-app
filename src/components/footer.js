import React from 'react';
import '../App.css';
import logoGithub from '../images/github.svg';
import logoApi from '../images/logo-api.png';

export default function Footer() {
    console.log('logoGithub', logoGithub);
    console.log('logoApi', logoApi); 
    let date = new Date();
    let year = date.getFullYear()
  return (
    <footer>
        <div className='footer'>
            <div className='footer-links'>
                <a href='https://github.com/forgerlil/crossover-app' target='_blank'><img className='logo-github' src={logoGithub} alt='GitHub logo' /></a>
                <a href='https://apilayer.com/marketplace/description/exchangerates_data-api?preview=true#pricing' target='_blank'><img className='logo-api' src={logoApi} alt='api logo' /></a>
            </div>
            <div className='footer-copyright'>
                <h6>©</h6>
                <h6>{year}</h6>
                <h6>Converter Exchanges Inc.</h6>
            </div>
            
        </div>
    </footer>
  )
}
