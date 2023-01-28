import ButtonContainer from './ButtonContainer'
import Header from '../components/Header/Header'
import MainPageContainer from './MainPage';
import Visualizor from './visulaizer'

import { useState } from 'react';
export default function App() {
 const [page_count, set_page_count] = useState('0vw');

  return (
    <>
      <Header nav_callback = {set_page_count}></Header>
      <MainPageContainer pages={[
            <ButtonContainer nav_callback = {set_page_count}></ButtonContainer>,
            <Visualizor></Visualizor>
      ]}
      
      current_page = {page_count}
      />
    </>  
  );
}