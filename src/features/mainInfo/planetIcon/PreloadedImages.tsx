import styled from 'styled-components';
import { getImgUrl } from '../../../utils/getImgUrl';
import { InfoType, Planet } from '../mainInfoSlice';
import { PlanetImage } from './PlanetIcon';

const StyledPreloadedImages = styled.div`
  display: none;
`;

function PreloadedImages() {
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

  const infoTypes: InfoType[] = ['overview', 'internal', 'surface'];

  const sources = planets.map((elem: Planet) => {
    const planetImages = [];
    let type: InfoType;
    for (type of infoTypes) {
      getImgUrl(elem, type).length > 1
        ? planetImages.push(getImgUrl(elem, type)[1])
        : planetImages.push(getImgUrl(elem, type)[0]);
    }
    return planetImages;
  });

  console.log(sources.flat());

  return (
    <StyledPreloadedImages>
      {sources.flat().map((source) => (
        <PlanetImage key={source} src={source} alt={source} />
      ))}
    </StyledPreloadedImages>
  );
}
export default PreloadedImages;
