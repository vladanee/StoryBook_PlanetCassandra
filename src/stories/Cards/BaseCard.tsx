import React from 'react';
import { CardContent, Typography } from '@mui/material';
import './cardStyles.css';
import Image from 'next/image';

interface CardProps {
    title: string;
    date?: any;
    thumbnail?: string; // Assuming thumbnail is a URL string
}

const BaseCard: React.FC<CardProps> = ({ title, date, thumbnail }) => {
    const renderThumbnail = (thumbnailSrc: string | undefined, alt: string) => {
        if (thumbnailSrc) {
            // Using Next.js Image component for optimized image loading
            return (
                <Image
                    src={thumbnailSrc}
                    alt={alt}
                    width={500} // Specify width
                    height={300} // Specify height
                    objectFit="cover"
                    className="thumbnail"
                />
            );
        } else {
            // Fallback to a default image if `thumbnailSrc` is not provided
            return (
                <Image
                    src="https://i.ibb.co/Bq2J6JT/Static-Thumbnail.png" // Default or placeholder image URL
                    alt='Placeholder'
                    width={500}
                    height={300}
                    objectFit="cover"
                    className='thumbnail'
                />
            );
        }
    };

    const renderContent = () => {
        return (
            <>
                <Typography
                    className="truncate"
                    fontFamily="Roboto Condensed, sans-serif"
                    fontWeight={400}
                    sx={{
                        color: "#383D3B",
                        fontSize: { xs: 18, sm: 18, md: 20, lg: 20, xl: 22 },
                    }}
                    component="h2"
                >
                    {title}
                </Typography>
                <Typography
                    fontFamily="Roboto Condensed, sans-serif"
                    fontWeight={300}
                    sx={{
                        color: "#383D3B",
                        fontSize: { xs: 15, sm: 15, md: 17, lg: 17, xl: 19 },
                    }}
                >
                    {date ? new Date(date).toLocaleDateString() : ""}
                </Typography>
            </>
        );
    };

    return (
        <>
            {renderThumbnail(thumbnail, title)}
            {renderContent()}
        </>
    );
}

export { BaseCard };
export type { CardProps };