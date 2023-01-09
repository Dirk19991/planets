export function getIconAnimation(
  activePlanet: boolean,
  activeInfoType: boolean
) {
  if (activePlanet && activeInfoType) {
    return { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 };
  } else if (activeInfoType) {
    return { x: -500, y: -300, rotate: 180, opacity: 0, scale: 0.5 };
  } else {
    return { rotate: 180, opacity: 0, scale: 0.5 };
  }
}

export function getTextAnimation(
  activePlanet: boolean,
  activeInfoType: boolean
) {
  if (activePlanet && activeInfoType) {
    return { x: 0, opacity: 1 };
  } else if (activeInfoType) {
    return { x: 500, opacity: 0 };
  } else {
    return { x: 500, opacity: 0 };
  }
}

export function getFooterAnimation(
  activePlanet: boolean,
  activeInfoType: boolean
) {
  if (activeInfoType && activePlanet) {
    return { y: 0, opacity: 1 };
  } else {
    return { y: 1000, opacity: 0 };
  }
}
