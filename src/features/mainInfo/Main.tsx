import styled from 'styled-components';
import PlanetIcon from './planetIcon/PlanetIcon';
import PlanetInfo from './planetInfo/PlanetInfo';
import { Flex } from '../../common/Flex';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 70%;
  margin: 0 auto;
`;

function Main() {
  return (
    <MainContainer>
      <Flex justify='space-between'>
        <PlanetIcon />
        <PlanetInfo />
      </Flex>
    </MainContainer>
  );
}
export default Main;
