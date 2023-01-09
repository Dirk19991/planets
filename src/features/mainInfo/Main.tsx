import styled from 'styled-components';
import PlanetIcon from './planetIcon/PlanetIcon';
import PlanetInfo from './planetInfo/PlanetInfo';
import { Flex } from '../../common/Flex';
import Buttons from './buttons/Buttons';
import { useMediaQuery } from 'react-responsive';

const MainContainer = styled(Flex)`
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 3.5rem 2rem;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

function Main() {
  const mobile = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  return (
    <MainContainer justify='space-between'>
      {mobile && <Buttons />}
      <PlanetIcon />
      <PlanetInfo />
    </MainContainer>
  );
}
export default Main;
