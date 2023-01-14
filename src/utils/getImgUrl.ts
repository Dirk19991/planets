import { InfoType, Planet } from '../features/mainInfo/mainInfoSlice';

export function getImgUrl(name: Planet, infoType: InfoType) {
  const planet = name.toLowerCase();
  switch (infoType) {
    case 'overview':
      return [`/images/planet-${planet}.svg`];
    case 'internal':
      return [`/images/planet-${planet}-internal.svg`];
    case 'surface':
      return [
        `/images/planet-${planet}.svg`,
        `/images/planet-${planet}-geology.png`,
      ];
  }
}
