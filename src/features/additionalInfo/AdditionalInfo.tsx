import styled from 'styled-components';
import data from '../../data/planets.json';
import { useAppSelector } from '../../app/store';
import { Flex } from '../../common/Flex';

const AdditionalInfoFlex = styled(Flex)`
  width: 70%;
  margin: 0 auto;
`;

const InfoBox = styled(Flex)`
  width: 250px;
  padding: 1rem 3rem 1rem 1rem;
  color: white;
  text-transform: uppercase;
  background-color: hsl(240, 67%, 8%);
  border: 1px solid rgb(255, 255, 255, 0.3);
  cursor: pointer;
  margin-bottom: 1rem;
`;

const InfoBoxHeader = styled.div`
  text-transform: uppercase;
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
      <InfoBox align='flex-start' direction='column'>
        <InfoBoxHeader>Rotation Time</InfoBoxHeader>
        <InfoBoxContent>{rotationTime}</InfoBoxContent>
      </InfoBox>
      <InfoBox align='flex-start' direction='column'>
        <InfoBoxHeader>Revolution Time</InfoBoxHeader>
        <InfoBoxContent>{revolutionTime}</InfoBoxContent>
      </InfoBox>
      <InfoBox align='flex-start' direction='column'>
        <InfoBoxHeader>Radius</InfoBoxHeader>
        <InfoBoxContent>{radius}</InfoBoxContent>
      </InfoBox>
      <InfoBox align='flex-start' direction='column'>
        <InfoBoxHeader>Average Temp.</InfoBoxHeader>
        <InfoBoxContent>{averageTemp}</InfoBoxContent>
      </InfoBox>
    </AdditionalInfoFlex>
  );
}
export default AdditionalInfo;
