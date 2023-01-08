import { InfoType, Planet } from '../features/mainInfo/mainInfoSlice';

export function getImgUrl(name: Planet, infoType: InfoType) {
  const planet = name.toLowerCase();
  switch (infoType) {
    case 'overview':
      return [`/src/assets/images/planet-${planet}.svg`];
    case 'internal':
      return [`/src/assets/images/planet-${planet}-internal.svg`];
    case 'surface':
      return [
        `/src/assets/images/planet-${planet}.svg`,
        `/src/assets/images/planet-${planet}-geology.png`,
      ];
  }
}
