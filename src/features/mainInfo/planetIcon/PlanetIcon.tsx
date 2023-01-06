import styled from 'styled-components';
import { useAppSelector } from '../../../app/store';
import { InfoType, Planet } from '../mainInfoSlice';
import { motion } from 'framer-motion';

interface PlanetIconContainerProps {
  image?: string;
}

const PlanetIconContainer = styled(motion.div)<PlanetIconContainerProps>`
  min-width: 400px;
  min-height: 400px;
  max-width: 500px;
  max-height: 500px;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    background: url(${(props) => (props.image ? props.image : '')}) no-repeat
      center;
    width: 100%;
    height: 100%;
    transform: scale(0.4) translateY(100%);

    left: 0;
    z-index: 10;
  }
`;

const PlanetImage = styled(motion.img)`
  width: 100%;
  height: 100%;
`;

function getImgUrl(name: Planet, infoType: InfoType) {
  const planet = name.toLowerCase();
  switch (infoType) {
    case 'overview':
      return [`/src/assets/images/planet-${planet}.svg`];
    case 'internal':
      return [`/src/assets/images/planet-${planet}-internal.svg`];
    case 'surface':
      return [
        `/src/assets/images/planet-${planet}.svg`,
        `/src/assets/images/planet-${planet}-geology.png`,
      ];
  }
}

function PlanetIcon() {
  const currentPlanet = useAppSelector((state) => state.mainInfo.planet);
  const currentInfoType = useAppSelector((state) => state.mainInfo.infoType);
  const active = useAppSelector((state) => state.animation.isActivePlanet);

  let beforeImageLink;
  currentInfoType === 'surface'
    ? (beforeImageLink = getImgUrl(currentPlanet, currentInfoType)[1])
    : '';

  return (
    <PlanetIconContainer
      initial={{ opacity: 0, scale: 0.5 }}
      animate={
        active
          ? { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }
          : { x: -500, y: -300, rotate: 180, opacity: 0, scale: 0.5 }
      }
      transition={{ duration: 0.5 }}
      image={beforeImageLink}
    >
      <PlanetImage src={getImgUrl(currentPlanet, currentInfoType)[0]} alt='' />
    </PlanetIconContainer>
  );
}
export default PlanetIcon;
