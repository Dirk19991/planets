import { InfoType, Planet } from '../features/mainInfo/mainInfoSlice';

export function getImgUrl(name: Planet, infoType: InfoType) {
  const planet = name.toLowerCase();
  switch (infoType) {
    case 'overview':
      return [`public/images/planet-${planet}.svg`];
    case 'internal':
      return [`public/images/planet-${planet}-internal.svg`];
    case 'surface':
      return [
        `/public/images/planet-${planet}.svg`,
        `/public/images/planet-${planet}-geology.png`,
      ];
  }
}
