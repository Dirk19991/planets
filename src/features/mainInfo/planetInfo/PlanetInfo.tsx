import styled from 'styled-components';
import data from '../../../data/planets.json';
import { useAppSelector } from '../../../app/store';
import { Flex } from '../../../common/Flex';
import Buttons from '../buttons/Buttons';
import { motion, AnimatePresence } from 'framer-motion';

const FlexPlanetInfo = styled(Flex)`
  width: 35%;
  gap: 2.5rem;
`;

const PlanetName = styled(motion.div)`
  font-size: 4rem;
  font-family: 'Antonio', sans-serif;
  text-transform: uppercase;
  color: white;
`;

const PlanetDescription = styled(motion.div)`
  font-family: 'Spartan', sans-serif;
  color: rgb(255, 255, 255, 0.7);
  line-height: 1.5rem;
  text-align: start;
`;

function PlanetInfo() {
  const currentPlanet = useAppSelector((state) => state.mainInfo.planet);
  const currentInfoType = useAppSelector((state) => state.mainInfo.infoType);
  const active = useAppSelector((state) => state.animation.isActivePlanet);

  const currentPlanetInfo = data.filter((elem) => elem.name === currentPlanet);
  const name = currentPlanetInfo[0].name;
  const description = currentPlanetInfo[0][currentInfoType];

  return (
    <FlexPlanetInfo
      direction='column'
      justify='space-between'
      align='flex-start'
    >
      <PlanetName
        initial={{ opacity: 1 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {name}
      </PlanetName>
      <PlanetDescription
        initial={{ opacity: 1 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {description}
      </PlanetDescription>
      <Buttons />
    </FlexPlanetInfo>
  );
}
export default PlanetInfo;
