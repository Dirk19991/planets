import { memo } from 'react';
import styled from 'styled-components';
import { getImgUrl } from '../../../utils/getImgUrl';
import { InfoType, Planet } from '../mainInfoSlice';
import { PlanetImage } from './PlanetIcon';
import { planets } from '../../../data/planetsList';

const StyledPreloadedImages = styled.div`
  display: none;
`;

function PreloadedImages() {
  // прелоад иконок в скрытый компонент, чтобы избежать мерцания при анимации

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

  return (
    <StyledPreloadedImages>
      {sources.flat().map((source) => (
        <PlanetImage key={source} src={source} alt={source} />
      ))}
    </StyledPreloadedImages>
  );
}
export default memo(PreloadedImages);
