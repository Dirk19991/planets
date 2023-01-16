import styled from 'styled-components';
import data from '../../../data/planets.json';
import { useAppSelector } from '../../../app/store';
import { Flex } from '../../../common/Flex';
import Buttons from '../buttons/Buttons';
import { motion } from 'framer-motion';
import { getTextAnimation } from '../../../utils/animations';
import { useMediaQuery } from 'react-responsive';

const FlexPlanetInfo = styled(Flex)`
  width: 35%;
  gap: 2.5rem;
  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
`;

const PlanetName = styled(motion.h2)`
  font-size: 4rem;
  font-family: 'Antonio', sans-serif;
  text-transform: uppercase;
  color: white;
  font-weight: normal;
`;

const PlanetDescription = styled(motion.p)`
  font-family: 'Spartan', sans-serif;
  color: rgb(255, 255, 255, 0.7);
  line-height: 1.5rem;
  text-align: start;
`;

function PlanetInfo() {
  const currentPlanet = useAppSelector((state) => state.mainInfo.planet);
  const currentInfoType = useAppSelector((state) => state.mainInfo.infoType);
  const activePlanet = useAppSelector(
    (state) => state.animation.isActivePlanet
  );
  const activeInfoType = useAppSelector(
    (state) => state.animation.isActiveInfoType
  );

  const currentPlanetInfo = data.filter((elem) => elem.name === currentPlanet);
  const name = currentPlanetInfo[0].name;
  const description = currentPlanetInfo[0][currentInfoType];

  const desktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  return (
    <FlexPlanetInfo
      as={motion.section}
      direction='column'
      justify='space-between'
      align='flex-start'
      initial={{ opacity: 1 }}
      animate={getTextAnimation(activePlanet, activeInfoType)}
      transition={{ duration: 1 }}
    >
      <PlanetName>{name}</PlanetName>
      <PlanetDescription>{description}</PlanetDescription>

      {desktop && <Buttons />}
    </FlexPlanetInfo>
  );
}
export default PlanetInfo;
