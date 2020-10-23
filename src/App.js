import React from 'react';
import Display from './components/display/display';
import Input from './components/input/input';

function App(props) {
    let str1 = "1. Створити класовий компонент в якому з допомогою стану компоненту всі дані з інпута в який юзер буде вводити тест - будуть в режимі реального часу відображатись в функціональному компоненті в h1 тегу.";
  return (
      <>
        <Display text={str1}/>
        <Input text="oleh"/>
      </>
  );
}

export default App;
