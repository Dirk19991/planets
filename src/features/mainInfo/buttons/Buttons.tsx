import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { Flex } from '../../../common/Flex';
import { InfoType, setPlanet } from '../mainInfoSlice';
import { animateInfoType } from '../../../app/animationSlice';
import { useMediaQuery } from 'react-responsive';

interface ButtonProps {
  selected: boolean;
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  @media (max-width: 1024px) {
    flex-direction: row;
  }
`;

const Button = styled.button<ButtonProps>`
  width: 300px;
  display: block;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.selected ? 'rgba(101, 100, 251, 0.8)' : 'rgb(7, 7, 34)'};
  border: 1px solid rgb(255, 255, 255, 0.3);
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(169, 180, 234, 0.5);
  }

  transition: all 0.5s;

  @media (max-width: 1024px) {
    width: 100px;
    padding: 0.2rem;
    border: none;
    background-color: rgb(7, 7, 34);
    line-height: 2.5;
    color: ${(props) =>
      props.selected ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)'};

    &:hover {
      background-color: rgb(7, 7, 34);
    }
  }
`;
const Number = styled(Flex)`
  min-width: 2rem;
`;

function Buttons() {
  const dispatch = useAppDispatch();
  const currentInfoType = useAppSelector((state) => state.mainInfo.infoType);

  const desktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const infoTypeHandler = (infoType: InfoType) => {
    if (infoType === currentInfoType) {
      return;
    }

    dispatch(animateInfoType(false));

    // убираем скролл при анимации
    document.body.style.overflowY = 'hidden';

    setTimeout(() => {
      dispatch(setPlanet({ infoType: infoType }));
      dispatch(animateInfoType(true));
    }, 1400);

    setTimeout(() => {
      document.body.style.overflowY = 'auto';
    }, 2400);
  };

  return (
    <ButtonContainer>
      <Button
        selected={currentInfoType === 'overview' ? true : false}
        onClick={() => infoTypeHandler('overview')}
      >
        <Flex justify='flex-start' gap='2rem'>
          {desktop && <Number>01</Number>}
          <div>Overview</div>
        </Flex>
      </Button>
      <Button
        selected={currentInfoType === 'internal' ? true : false}
        onClick={() => infoTypeHandler('internal')}
      >
        <Flex justify='flex-start' gap='2rem'>
          {desktop && <Number>02</Number>}
          <div>{desktop ? 'Internal Structure' : 'Structure'}</div>
        </Flex>
      </Button>
      <Button
        selected={currentInfoType === 'surface' ? true : false}
        onClick={() => infoTypeHandler('surface')}
      >
        <Flex justify='flex-start' gap='2rem'>
          {desktop && <Number>03</Number>}
          <div>{desktop ? 'Surface geology' : 'Surface'}</div>
        </Flex>
      </Button>
    </ButtonContainer>
  );
}
export default Buttons;
