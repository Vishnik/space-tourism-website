import React from 'react';
import LogoStyles from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <a href='#' title='Main page' className={LogoStyles.logo}>
      <div className={LogoStyles.logo__left}></div>
      <div className={LogoStyles.logo__right}></div>
    </a>
  )
};

export default Logo;
