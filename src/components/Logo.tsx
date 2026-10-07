import React from 'react';
import logoImage from '../../Icons/Logo.png';

interface LogoProps {
  size?: 'normal' | 'large';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'normal', className = '' }) => {
  const isLarge = size === 'large';
  
  return (
    <a href="#" className={`logo-brand ${className}`} style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
      <img
        src={logoImage}
        alt="NivethUX"
        style={{ width: isLarge ? '216px' : '168px', height: 'auto', display: 'block' }}
      />
    </a>
  );
};
