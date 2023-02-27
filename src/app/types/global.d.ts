declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
    import React from 'react';

    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
  }
declare module '*.mp3';
declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.webp';
declare module '*.png';
