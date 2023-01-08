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
    return { opacity: 1 };
  } else if (activeInfoType) {
    return { opacity: 0 };
  } else {
    return { opacity: 0 };
  }
}
