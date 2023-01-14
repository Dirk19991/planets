import styled from 'styled-components';
import { useAppSelector } from '../../../app/store';
import { motion } from 'framer-motion';
import { getIconAnimation } from '../../../utils/animations';
import { getImgUrl } from '../../../utils/getImgUrl';

interface PlanetIconContainerProps {
  image?: string;
}

const PlanetIconContainer = styled(motion.div)<PlanetIconContainerProps>`
  min-width: 400px;
  min-height: 400px;
  max-width: 500px;
  max-height: 500px;
  position: relative;

  @media (max-width: 1024px) {
    min-width: 350px;
    min-height: 350px;
  }

  &::before {
    position: absolute;
    content: '';
    background-image: url(${(props) => (props.image ? props.image : '')});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100px;
    height: 30%;
    left: 50%;
    top: 70%;
    transform: translate(-50px);
    z-index: 100;

    @media (max-width: 1024px) {
    }
  }
`;

const PlanetImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  @media (max-width: 1024px) {
    width: 85%;
    height: 85%;
  }
`;

function PlanetIcon() {
  const currentPlanet = useAppSelector((state) => state.mainInfo.planet);
  const currentInfoType = useAppSelector((state) => state.mainInfo.infoType);
  const activePlanet = useAppSelector(
    (state) => state.animation.isActivePlanet
  );
  const activeInfoType = useAppSelector(
    (state) => state.animation.isActiveInfoType
  );

  let beforeImageLink: string;
  currentInfoType === 'surface'
    ? (beforeImageLink = getImgUrl(currentPlanet, currentInfoType)[1])
    : (beforeImageLink = '');

  return (
    <PlanetIconContainer
      initial={{ opacity: 1, scale: 1 }}
      animate={getIconAnimation(activePlanet, activeInfoType)}
      transition={{ duration: 1 }}
      image={beforeImageLink}
    >
      <PlanetImage src={getImgUrl(currentPlanet, currentInfoType)[0]} alt='' />
    </PlanetIconContainer>
  );
}
export default PlanetIcon;
