import Hamburger from 'hamburger-react';
import { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { Planet, setPlanet } from '../mainInfo/mainInfoSlice';
import { setOpenMenu } from '../../app/burgerSlice';
import { setActivePlanet } from '../../app/animationSlice';

const PlanetColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 1.2rem;
  margin-top: 6rem;
  align-items: flex-start;
  gap: 5px;
`;

const MobilePlanet = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  width: 85%;
  height: 5%;
  border-bottom: 1px solid rgb(255, 255, 255, 0.5);
  cursor: pointer;
`;

function MobileHeader() {
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

  const dispatch = useAppDispatch();
  const isOpened = useAppSelector((state) => state.burger.isOpened);
  const setOpen = () => {
    dispatch(setOpenMenu(!isOpened));
  };

  const currentPlanet = useAppSelector((state) => state.mainInfo.planet);

  const setPlanetHandler = (planet: Planet) => {
    if (planet === currentPlanet) {
      setOpen();
      return;
    }

    setOpen();
    dispatch(setActivePlanet(false));
    setTimeout(() => {
      dispatch(setActivePlanet(true));
      dispatch(setPlanet({ planet: planet, infoType: 'overview' }));
    }, 1000);
  };

  return (
    <>
      {isOpened && (
        <PlanetColumn>
          {planets.map((planet) => (
            <MobilePlanet onClick={() => setPlanetHandler(planet)} key={planet}>
              {planet}
            </MobilePlanet>
          ))}
        </PlanetColumn>
      )}
      <Hamburger toggled={isOpened} toggle={setOpen} />
    </>
  );
}
export default MobileHeader;
