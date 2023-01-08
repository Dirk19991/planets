import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { Flex } from '../../../common/Flex';
import { InfoType, setPlanet } from '../mainInfoSlice';
import {
  setActivePlanet,
  setActiveInfoType,
} from '../../../app/animationSlice';

interface ButtonProps {
  selected: boolean;
}

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
`;
const Number = styled(Flex)`
  min-width: 2rem;
`;

function Buttons() {
  const dispatch = useAppDispatch();
  const currentInfoType = useAppSelector((state) => state.mainInfo.infoType);

  const infoTypeHandler = (infoType: InfoType) => {
    if (infoType === currentInfoType) {
      return;
    }
    dispatch(setActiveInfoType(false));

    setTimeout(() => {
      dispatch(setPlanet({ infoType: infoType }));
      dispatch(setActiveInfoType(true));
    }, 700);
  };

  return (
    <Flex direction='column' gap='1rem'>
      <Button
        selected={currentInfoType === 'overview' ? true : false}
        onClick={() => infoTypeHandler('overview')}
      >
        <Flex justify='flex-start' gap='2rem'>
          <Number>01</Number>
          <div>Overview</div>
        </Flex>
      </Button>
      <Button
        selected={currentInfoType === 'internal' ? true : false}
        onClick={() => infoTypeHandler('internal')}
      >
        <Flex justify='flex-start' gap='2rem'>
          <Number>02</Number>
          <div>Internal Structure</div>
        </Flex>
      </Button>
      <Button
        selected={currentInfoType === 'surface' ? true : false}
        onClick={() => infoTypeHandler('surface')}
      >
        <Flex justify='flex-start' gap='2rem'>
          <Number>03</Number>
          <div>Surface geology</div>
        </Flex>
      </Button>
    </Flex>
  );
}
export default Buttons;
