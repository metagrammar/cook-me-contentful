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
                        <div></div>
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