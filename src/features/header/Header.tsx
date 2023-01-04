import styled from 'styled-components';
import { useAppDispatch } from '../../app/store';
import { Flex } from '../../common/Flex';
import { MainInfo, Planet } from '../mainInfo/mainInfoSlice';
import { setPlanet } from '../mainInfo/mainInfoSlice';

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

  const setPlanetHandler = (planet: Planet) => {
    dispatch(setPlanet({ planet: planet, infoType: 'overview' }));
  };

  return (
    <>
      <HeaderFlex justify='space-between' align='center'>
        <PlanetsHeader>THE PLANETS</PlanetsHeader>
        <PlanetsFlex justify='space-between' align='center' gap='2rem'>
          {planets.map((planet) => (
            <div onClick={() => setPlanetHandler(planet)} key={planet}>
              {planet.toUpperCase()}
            </div>
          ))}
        </PlanetsFlex>
      </HeaderFlex>
    </>
  );
}
export default Header;
