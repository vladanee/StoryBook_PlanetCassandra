import React from 'react';
import { CardContent, Typography } from '@mui/material'
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import './cardStyles.css'

interface CardProps {
    title: string;
    date?: any;
    thumbnail?: IGatsbyImageData;
}

const BaseCard: React.FC<CardProps> = ({ title, date, thumbnail }) => {
    const renderThumbnail = (thumbnailSrc: string | undefined, alt: string) => {
        if (thumbnailSrc) {
            return (
                <img
                    className="thumbnail"
                    src={thumbnailSrc}
                    alt={alt}
                    style={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                    }}
                />
            );
        } else {
            // Fallback to a default image if `thumbnailSrc` is not provided
            return (
                <img
                    src="https://i.ibb.co/Bq2J6JT/Static-Thumbnail.png" // Default or placeholder image URL
                    className="thumbnail"
                    alt="Placeholder"
                    style={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                    }}
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
                    component="h2">
                    {title}
                </Typography>
                <Typography
                    fontFamily="Roboto Condensed, sans-serif"
                    fontWeight={300}
                    sx={{
                        color: "#383D3B",
                        fontSize: { xs:15, sm: 15, md: 17, lg: 17, xl: 19 },
                    }}
                >
                    {new Date(date).toLocaleDateString()}
                </Typography>
            </>
        );
    }

    return (
        <>
            {renderThumbnail(thumbnail, title)}
            {renderContent()}
        </>
    );
}

export { BaseCard, CardProps };
