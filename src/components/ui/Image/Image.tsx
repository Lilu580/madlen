import { FC } from 'react';

interface ImageProps {
    src: string;
    alt?: string;
    className?: string;
    objectFit?: 'cover' | 'contain' | 'fill';
    priority?: boolean;
}

export const Image: FC<ImageProps> = ({
    src,
    alt = '',
    className = '',
    objectFit = 'cover',
    priority = false,
}) => {
    return (
        <div 
            className={`relative ${className}`}
            style={{ 
                backgroundImage: `url(${src})`,
                backgroundPosition: 'center',
                backgroundSize: objectFit,
                backgroundRepeat: 'no-repeat'
            }}
            role="img"
            aria-label={alt}
        />
    );
}; 