import styled from 'styled-components';
import PlanetIcon from './planetIcon/PlanetIcon';
import PlanetInfo from './planetInfo/PlanetInfo';
import { Flex } from '../../common/Flex';

const MainContainer = styled(Flex)`
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 3.5rem 2rem;
`;

function Main() {
  return (
    <MainContainer justify='space-between'>
      <PlanetIcon />
      <PlanetInfo />
    </MainContainer>
  );
}
export default Main;
