import styled from 'styled-components';
import { useAppDispatch } from '../../../app/store';
import { Flex } from '../../../common/Flex';
import { InfoType, setPlanet } from '../mainInfoSlice';

const Button = styled.button`
  width: 300px;
  display: block;
  color: white;
  text-transform: uppercase;
  background-color: hsl(240, 67%, 8%);
  border: 1px solid rgb(255, 255, 255, 0.3);
  padding: 1rem;
  cursor: pointer;
`;

function Buttons() {
  const dispatch = useAppDispatch();

  const infoTypeHandler = (infoType: InfoType) => {
    dispatch(setPlanet({ infoType: infoType }));
  };

  return (
    <Flex direction='column' gap='1rem'>
      <Button onClick={() => infoTypeHandler('overview')}>
        <Flex justify='flex-start' gap='2rem'>
          <div>01</div>
          <div>Overview</div>
        </Flex>
      </Button>
      <Button onClick={() => infoTypeHandler('internal')}>
        <Flex justify='flex-start' gap='2rem'>
          <div>02</div>
          <div>Internal Structure</div>
        </Flex>
      </Button>
      <Button onClick={() => infoTypeHandler('surface')}>
        <Flex justify='flex-start' gap='2rem'>
          <div>03</div>
          <div>Surface geology</div>
        </Flex>
      </Button>
    </Flex>
  );
}
export default Buttons;
