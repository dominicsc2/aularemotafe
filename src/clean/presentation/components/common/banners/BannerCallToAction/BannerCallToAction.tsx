import { useRouter } from 'next/router';
import React from 'react';
import OutlineButton from '../../buttons/OutlineButton/OutlineButton';
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../buttons/SecondaryButton/SecondaryButton';
import { IBannerCallToAction } from '../../interfaces/banner.interfaces';
import SearchBox from '../../SearchBox/SearchBox';

const BannerCallToAction: React.FC<IBannerCallToAction> = ({
  contentWrapperStyle,
  backgroundImage,
  mainInfoStyle,
  mainTitle,
  bannerDescription,
  href,
  onClick,
  searchBoxPlaceholder,
  buttonText,
  buttonStyle,
}) => {
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push(href);
  }

  function renderButton() {
    switch (buttonStyle) {
      case 'primary': return <PrimaryButton dataTestId="call-to-action" onClick={handleClick} value={buttonText} />;
      case 'secondary': return <SecondaryButton dataTestId="call-to-action" onClick={handleClick} value={buttonText} />;
      case 'outline': return <OutlineButton dataTestId="call-to-action" onClick={handleClick} value={buttonText} />;
    }
  }
  return (
    <div
      className={contentWrapperStyle}
      style={{
        backgroundImage: backgroundImage || '',
      }}
    >
      <div className={mainInfoStyle}>
        <h1>{mainTitle}</h1>
        <br />
        <br />
        {bannerDescription && (
          <p
            dangerouslySetInnerHTML={{
              __html: bannerDescription,
            }}
          />
        )}
        {searchBoxPlaceholder ? (
          <SearchBox
            placeholder={searchBoxPlaceholder}
            additionalStyles="home"
          />
        ) : (
          renderButton()
        )}
      </div>
    </div>
  );
};

export default BannerCallToAction;
