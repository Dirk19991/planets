import AdditionalInfo from '../features/additionalInfo/AdditionalInfo';
import Header from '../features/header/Header';
import Main from '../features/mainInfo/Main';
import { useAppSelector } from './store';

function App() {
  const isOpened = useAppSelector((state) => state.burger.isOpened);

  return (
    <>
      <Header />

      {!isOpened && <Main />}
      {!isOpened && <AdditionalInfo />}
    </>
  );
}

export default App;
