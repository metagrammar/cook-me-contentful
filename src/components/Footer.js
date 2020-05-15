import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import './Footer.css';

const useStyles = makeStyles((theme) => ({
    termsButtons: {
      fontFamily: 'Montserrat, sans-serif',
      disableTouchRipple: true,
      fontSize: '1rem'
    },
  }));

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <div className='footer'>
                <div className='footer-center'>
                    <div class='about'>
                        <div className='follow'>
                        <h3>Follow Cook Me</h3>
                        </div>
                        <div className='contact'>
                            <h3>Contact Cook Me</h3>
                            <p>Cook Me would love to hear from you, drop us a note at: 
                            <a href="mailto:hi@cookme.com?subject=Dear cook me, can I ask you a question?"> hi@cookme.com</a>
                            </p>
                        </div>
                        <div className='news'>
                        <h3>Cook Me has something to say</h3>
                        <p>Get the newsletter.</p>
                        </div>
                    </div>
                    <div class='terms-condition'>
                        <ButtonBase className={classes.termsButtons}>Terms &amp; Conditions</ButtonBase>
                        <ButtonBase className={classes.termsButtons}>Legal</ButtonBase>
                        <ButtonBase className={classes.termsButtons}>Privacy Policy</ButtonBase>
                    </div>
                </div>
            </div>
        </>
        
    )
};

export default Footer;