import styled from 'styled-components';
import data from '../../data/planets.json';
import { useAppSelector } from '../../app/store';
import { Flex } from '../../common/Flex';
import { motion } from 'framer-motion';
import { getFooterAnimation } from '../../utils/animations';

const AdditionalInfoFlex = styled(Flex)`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  overflow: hidden;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const InfoBox = styled(Flex)`
  width: 250px;
  padding: 2rem 3rem 2rem 2rem;
  color: white;
  text-transform: uppercase;
  background-color: rgb(7, 7, 34);
  border: 1px solid rgb(255, 255, 255, 0.3);
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 1rem 1.5rem 1rem 1rem;
    margin-bottom: 0;
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const InfoBoxHeader = styled.div`
  text-transform: uppercase;
  font-family: 'Spartan', sans-serif;
  color: rgb(255, 255, 255, 0.7);
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  @media (max-width: 1024px) {
    font-size: 0.5rem;
  }
`;

const InfoBoxContent = styled.div`
  font-family: 'Antonio';
  font-size: 2rem;
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;

function AdditionalInfo() {
  const currentPlanet = useAppSelector((state) => state.mainInfo.planet);
  const currentPlanetInfo = data.filter((elem) => elem.name === currentPlanet);
  const activeInfoType = useAppSelector(
    (state) => state.animation.isActiveInfoType
  );
  const activePlanet = useAppSelector(
    (state) => state.animation.isActivePlanet
  );

  const rotationTime = currentPlanetInfo[0].rotationTime;
  const revolutionTime = currentPlanetInfo[0].revolutionTime;
  const radius = currentPlanetInfo[0].radius;
  const averageTemp = currentPlanetInfo[0].averageTemperature;

  return (
    <AdditionalInfoFlex
      as={motion.div}
      animate={getFooterAnimation(activeInfoType, activePlanet)}
      transition={{ duration: 1 }}
      justify='space-between'
      gap='1rem'
    >
      <InfoBox align='flex-start' direction='column' gap='0.5rem'>
        <InfoBoxHeader>Rotation Time</InfoBoxHeader>
        <InfoBoxContent>{rotationTime}</InfoBoxContent>
      </InfoBox>
      <InfoBox align='flex-start' direction='column' gap='0.5rem'>
        <InfoBoxHeader>Revolution Time</InfoBoxHeader>
        <InfoBoxContent>{revolutionTime}</InfoBoxContent>
      </InfoBox>
      <InfoBox align='flex-start' direction='column' gap='0.5rem'>
        <InfoBoxHeader>Radius</InfoBoxHeader>
        <InfoBoxContent>{radius}</InfoBoxContent>
      </InfoBox>
      <InfoBox align='flex-start' direction='column' gap='0.5rem'>
        <InfoBoxHeader>Average Temp.</InfoBoxHeader>
        <InfoBoxContent>{averageTemp}</InfoBoxContent>
      </InfoBox>
    </AdditionalInfoFlex>
  );
}
export default AdditionalInfo;
