import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { Flex } from '../../common/Flex';
import { Planet } from '../mainInfo/mainInfoSlice';
import { setPlanet } from '../mainInfo/mainInfoSlice';
import { setActivePlanet } from '../../app/animationSlice';
import { motion } from 'framer-motion';

const HeaderFlex = styled(Flex)`
  color: white;
  padding: 1.5rem 2.2rem;
  border-bottom: 1px solid rgb(255, 255, 255, 0.3);
  margin-bottom: 1rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const PlanetsFlex = styled(Flex)`
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  cursor: pointer;
`;

const PlanetsHeader = styled.div`
  font-family: 'Antonio';
  font-size: 1.7rem;
  letter-spacing: -0.05rem;
  cursor: pointer;
`;

const PlanetDiv = styled(motion.div)`
  position: relative;
`;

const UpperLine = styled(motion.div)`
  position: absolute;
  display: block;
  width: 0%;
  height: 4px;
  background-color: white;
  top: -30px;
  left: 10%;
  opacity: 1;
`;

function Header() {
  const planets: Planet[] = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
  ];

  const dispatch = useAppDispatch();

  const currentPlanet = useAppSelector((state) => state.mainInfo.planet);

  const setPlanetHandler = (planet: Planet) => {
    if (planet === currentPlanet) {
      return;
    }
    dispatch(setActivePlanet(false));
    setTimeout(() => {
      dispatch(setActivePlanet(true));
      dispatch(setPlanet({ planet: planet, infoType: 'overview' }));
    }, 700);
  };

  return (
    <>
      <HeaderFlex justify='space-between' align='center'>
        <PlanetsHeader>THE PLANETS</PlanetsHeader>
        <PlanetsFlex justify='space-between' align='center' gap='2rem'>
          {planets.map((planet) => (
            <PlanetDiv
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
              onClick={() => setPlanetHandler(planet)}
              key={planet}
            >
              {currentPlanet === planet && (
                <UpperLine animate={{ width: '80%' }} />
              )}
              {planet.toUpperCase()}
            </PlanetDiv>
          ))}
        </PlanetsFlex>
      </HeaderFlex>
    </>
  );
}
export default Header;
