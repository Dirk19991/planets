import styled from 'styled-components';
import { Flex } from '../../common/Flex';

const HeaderFlex = styled(Flex)`
  color: white;
  padding: 1.5rem 2.2rem;
  border-bottom: 1px solid rgb(255, 255, 255, 0.3);
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
  return (
    <>
      <HeaderFlex justify='space-between' align='center'>
        <PlanetsHeader>THE PLANETS</PlanetsHeader>
        <PlanetsFlex justify='space-between' align='center' gap='2rem'>
          <div>MERCURY</div>
          <div>VENUS</div>
          <div>EARTH</div>
          <div>MARS</div>
          <div>JUPITER</div>
          <div>SATURN</div>
          <div>URANUS</div>
          <div>NEPTUNE</div>
        </PlanetsFlex>
      </HeaderFlex>
    </>
  );
}
export default Header;
