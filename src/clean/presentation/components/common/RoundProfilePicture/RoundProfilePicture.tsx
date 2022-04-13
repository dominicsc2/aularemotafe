import React from 'react';
import styles from './RoundProfilePicture.module.scss';

interface ProfilePictureProps {
    imageUrl: string,
    size?: number,
    alt?: string,
    centered?: boolean
}

const RoundProfilePicture: React.FC<ProfilePictureProps> = ({
  imageUrl,
  size = 100,
  alt = 'me',
  centered = false,
}: ProfilePictureProps) => (
  <img
    className={`${styles.profilePicture} ${centered}` ? styles.profileCentered : ''}
    src={imageUrl}
    alt={alt}
    height={`${size}px`}
    width={`${size}px`}
  />
);

export default RoundProfilePicture;
