import React from 'react';
import { contentContainerProps } from '@/types/home';

const ContentContainer:React.FC<contentContainerProps> = ({children , className}) => {
  return (
    <div className={`text-white py-12 px-6 md:px-12 md:py-24 lg:flex lg:items-center lg:justify-between ${className}`}>
        {children}
    </div>
  )
}

export default ContentContainer;