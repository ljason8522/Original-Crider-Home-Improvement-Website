import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onClick?: () => void;
}

function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  onClick 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      )}
      
      {hasError ? (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-500">Image unavailable</div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${onClick ? 'cursor-pointer' : ''}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          onClick={onClick}
        />
      )}
    </div>
  );
}

export default OptimizedImage;