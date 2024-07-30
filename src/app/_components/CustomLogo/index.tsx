import React from 'react';
import classes from './index.module.scss'
import Image from 'next/image';

export const CustomLogo = () => (
  <div className={classes.logo}>
    <Image
      src="/white-logo.webp"
      alt="TRBL Design Logo"
      width={190}
      height={90}
    />

  </div>
);