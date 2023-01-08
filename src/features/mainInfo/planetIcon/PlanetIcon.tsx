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

function PlanetIcon() {
  const currentPlanet = useAppSelector((state) => state.mainInfo.planet);
  const currentInfoType = useAppSelector((state) => state.mainInfo.infoType);
  const activePlanet = useAppSelector(
    (state) => state.animation.isActivePlanet
  );
  const activeInfoType = useAppSelector(
    (state) => state.animation.isActiveInfoType
  );

  let beforeImageLink;
  currentInfoType === 'surface'
    ? (beforeImageLink = getImgUrl(currentPlanet, currentInfoType)[1])
    : '';

  return (
    <PlanetIconContainer
      initial={{ opacity: 1, scale: 1 }}
      animate={getIconAnimation(activePlanet, activeInfoType)}
      transition={{ duration: 0.5 }}
      image={beforeImageLink}
    >
      <PlanetImage src={getImgUrl(currentPlanet, currentInfoType)[0]} alt='' />
    </PlanetIconContainer>
  );
}
export default PlanetIcon;
