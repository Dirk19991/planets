import styled from 'styled-components';
import { useAppDispatch } from '../../app/store';
import { Flex } from '../../common/Flex';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from './MobileHeader';
import { setOpenMenu } from './burgerSlice';
import { useEffect } from 'react';
import DesktopHeader from './DesktopHeader';

const HeaderFlex = styled(Flex)`
  position: relative;
  color: white;
  padding: 1.5rem 2.2rem;
  border-bottom: 1px solid rgb(255, 255, 255, 0.3);
  margin-bottom: 1rem;
  @media (max-width: 1024px) {
    gap: 1.5rem;
    margin-bottom: -2rem;
  }
`;

const PlanetsHeader = styled.div`
  font-family: 'Antonio';
  font-size: 1.7rem;
  letter-spacing: -0.05rem;
`;

function Header() {
  const mobile = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  useEffect(() => {
    dispatch(setOpenMenu(false));
  }, [mobile]);

  const dispatch = useAppDispatch();

  return (
    <>
      <HeaderFlex as="header" justify="space-between" align="center">
        <PlanetsHeader>THE PLANETS</PlanetsHeader>
        {!mobile && <DesktopHeader />}
        {mobile && <MobileHeader />}
      </HeaderFlex>
    </>
  );
}
export default Header;
