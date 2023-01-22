import { motion } from 'framer-motion';
import styled from 'styled-components';
import { animatePlanet } from '../../app/animationSlice';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { Flex } from '../../common/Flex';
import { Planet, setPlanet } from '../mainInfo/mainInfoSlice';
import { planets } from '../../data/planetsList';

const StyledDesktopHeader = styled(Flex)`
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  cursor: pointer;
`;

const PlanetDiv = styled(motion.div)`
  position: relative;
`;

const UpperLine = styled(motion.div)`
  position: absolute;
  display: block;
  width: 80%;
  height: 4px;
  background-color: white;
  top: -30px;
  left: 10%;
  opacity: 1;
`;

function DesktopHeader() {
  const dispatch = useAppDispatch();

  const currentPlanet = useAppSelector((state) => state.mainInfo.planet);

  const setPlanetHandler = (planet: Planet) => {
    if (planet === currentPlanet) {
      return;
    }
    // убираем скролл при анимации
    document.body.style.overflowY = 'hidden';

    dispatch(animatePlanet(false));

    setTimeout(() => {
      dispatch(animatePlanet(true));
      dispatch(setPlanet({ planet: planet, infoType: 'overview' }));
    }, 1000);

    setTimeout(() => {
      document.body.style.overflowY = 'auto';
    }, 2000);
  };

  const lineMotion = {
    rest: {
      opacity: 0,
      ease: 'easeOut',
      duration: 0.2,
      type: 'tween',
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };

  return (
    <StyledDesktopHeader justify="space-between" align="center" gap="2rem">
      {planets.map((planet) => (
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          key={planet}
        >
          <PlanetDiv onClick={() => setPlanetHandler(planet)}>
            {currentPlanet === planet && <UpperLine />}
            <UpperLine variants={lineMotion} animate={{ width: '80%' }} />
            {planet.toUpperCase()}
          </PlanetDiv>
        </motion.div>
      ))}
    </StyledDesktopHeader>
  );
}
export default DesktopHeader;
