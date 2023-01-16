import Hamburger from 'hamburger-react';
import { planets } from '../../data/planetsList';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { Planet, setPlanet } from '../mainInfo/mainInfoSlice';
import { setOpenMenu } from './burgerSlice';
import { animatePlanet } from '../../app/animationSlice';
import { AnimatePresence, motion } from 'framer-motion';

const PlanetColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 1.2rem;
  margin-top: 6rem;
  align-items: flex-start;
  gap: 5px;
`;

const MobilePlanet = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.5rem 0 0;
  width: 85%;
  height: 5%;
  border-bottom: 1px solid rgb(255, 255, 255, 0.5);
  cursor: pointer;
`;

function MobileHeader() {
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector((state) => state.burger.isOpened);
  const setOpen = () => {
    dispatch(setOpenMenu(!isOpened));
  };

  const currentPlanet = useAppSelector((state) => state.mainInfo.planet);

  const setPlanetHandler = (planet: Planet) => {
    if (planet === currentPlanet) {
      setOpen();
      return;
    }
    // убираем скролл при анимации
    document.body.style.overflowY = 'hidden';

    setOpen();

    dispatch(animatePlanet(false));
    setTimeout(() => {
      dispatch(animatePlanet(true));
      dispatch(setPlanet({ planet: planet, infoType: 'overview' }));
    }, 1000);

    setTimeout(() => {
      document.body.style.overflowY = 'auto';
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpened && (
        <PlanetColumn>
          {planets.map((planet, index) => (
            <MobilePlanet
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{ delay: index / 20, type: 'tween' }}
              onClick={() => setPlanetHandler(planet)}
              key={planet}
            >
              {planet}
              <span>&#8594;</span>
            </MobilePlanet>
          ))}
        </PlanetColumn>
      )}
      <Hamburger toggled={isOpened} toggle={setOpen} />
    </AnimatePresence>
  );
}
export default MobileHeader;
