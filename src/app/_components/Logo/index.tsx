import React from 'react';
import classes from './index.module.scss'
import Image from 'next/image';

export const CustomLogo = () => (
  <div className="logo">
    <Image
      src="/assets/tabico.webp"
      alt="TRBL Design Logo"
      width={40}
      height={40}
    />
  </div>
);