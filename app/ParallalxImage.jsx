"use client"
import React, {useRef, useEffect} from 'react'
import ReactLenis from "lenis/react";
import { useLenis } from 'lenis/react';

const lerp = (start, end, factor) => start + (end-factor) * factor;

const ParallalxImage = ({src, alt}) => {
    const imageRef = useRef(null);
  return (
    <img
        ref={imageRef}
        src={src}
        alt={alt}
        
    />
  );
}

export default ParallalxImage
