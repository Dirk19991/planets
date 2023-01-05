import styled from 'styled-components';
import data from '../../data/planets.json';
import { useAppSelector } from '../../app/store';
import { Flex } from '../../common/Flex';

const AdditionalInfoFlex = styled(Flex)`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const InfoBox = styled(Flex)`
  width: 250px;
  padding: 2rem 3rem 2rem 2rem;
  color: white;
  text-transform: uppercase;
  background-color: rgb(7, 7, 34);
  border: 1px solid rgb(255, 255, 255, 0.3);
  margin-bottom: 1rem;
`;

const InfoBoxHeader = styled.div`
  text-transform: uppercase;
  font-family: 'Spartan', sans-serif;
  color: rgb(255, 255, 255, 0.7);
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

const InfoBoxContent = styled.div`
  font-family: 'Antonio';
  font-size: 2rem;
`;

function AdditionalInfo() {
  const currentPlanet = useAppSelector((state) => state.mainInfo.planet);
  const currentPlanetInfo = data.filter((elem) => elem.name === currentPlanet);

  const rotationTime = currentPlanetInfo[0].rotationTime;
  const revolutionTime = currentPlanetInfo[0].revolutionTime;
  const radius = currentPlanetInfo[0].radius;
  const averageTemp = currentPlanetInfo[0].averageTemperature;

  return (
    <AdditionalInfoFlex justify='space-between' gap='1rem'>
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
