import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { SubText } from "../SubText/SubText";

import { LoaderContainer, Loader, Circular, Path, LoaderText } from './CircleLoader.styled'

export const CircleLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress < 100) {
            return prevProgress + 1;
          } else {
            clearInterval(interval);
            return 100;
          }
        });
      }, 50);
    }

    return () => clearInterval(interval);
  }, [progress]);


  return (
    <LoaderContainer>
      <Loader>
        <Circular viewBox="25 25 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'rotate(-90deg)' }}
        >
          <circle
            id="grey"
            cx="50"
            cy="50"
            r="20"
            fill="transparent"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"

            stroke="var(--white)"
          />

          <Path
            cx="50"
            cy="50"
            r="20"
            fill="transparent"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"

            stroke="var(--pink)"
            style={{
              strokeDasharray: '126',
              strokeDashoffset: `${126 - (progress / 100) * 126}`,
            }}
          />
        </Circular>

        <LoaderText className="loader-text">{progress}%</LoaderText>
      </Loader>

      <SubText title={<FormattedMessage id="loading" />} />
    </LoaderContainer>
  )
}
