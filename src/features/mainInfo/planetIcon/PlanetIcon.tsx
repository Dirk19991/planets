import styled from 'styled-components';
import data from '../../../data/planets.json';
import { Data } from '../../../types';
import { useAppSelector } from '../../../app/store';
import planetEarth from '../../../assets/images/planet-earth.svg';
import { InfoType, Planet } from '../mainInfoSlice';

interface PlanetIconContainerProps {
  image?: string;
}

const PlanetIconContainer = styled.div<PlanetIconContainerProps>`
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

const PlanetImage = styled.img`
  width: 100%;
  height: 100%;
`;

const SurfaceImage = styled.div`
  position: absolute;

  top: 100%;
  right: 0;
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

  let beforeImageLink;
  currentInfoType === 'surface'
    ? (beforeImageLink = getImgUrl(currentPlanet, currentInfoType)[1])
    : '';

  console.log(beforeImageLink);

  return (
    <PlanetIconContainer image={beforeImageLink}>
      <PlanetImage src={getImgUrl(currentPlanet, currentInfoType)[0]} alt='' />
    </PlanetIconContainer>
  );
}
export default PlanetIcon;
