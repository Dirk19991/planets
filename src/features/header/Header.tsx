import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { Flex } from '../../common/Flex';
import { Planet } from '../mainInfo/mainInfoSlice';
import { setPlanet } from '../mainInfo/mainInfoSlice';
import { setActivePlanet } from '../../app/animationSlice';

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

const PlanetDiv = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 10%;
    height: 4px;
    background-color: green;
    top: -30px;
    left: 0;
    opacity: 0;
    transition: width 0.5s;
  }

  &:hover::before {
    opacity: 1;
    width: 100%;
  }
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
    }, 1000);
  };

  return (
    <>
      <HeaderFlex justify='space-between' align='center'>
        <PlanetsHeader>THE PLANETS</PlanetsHeader>
        <PlanetsFlex justify='space-between' align='center' gap='2rem'>
          {planets.map((planet) => (
            <PlanetDiv onClick={() => setPlanetHandler(planet)} key={planet}>
              {planet.toUpperCase()}
            </PlanetDiv>
          ))}
        </PlanetsFlex>
      </HeaderFlex>
    </>
  );
}
export default Header;
