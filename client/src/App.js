import React, { useState, useMemo} from "react";
import { Home, SignupPage } from "./components";
import { Routes, Route } from "react-router-dom";
import { Navbar  } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {MainLayout} from './styles/Layouts';
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import bg from "./img/bg.png";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from "./components/Income/Income.jsx";
import Expenses from "./components/Expenses/Expenses.jsx";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1) 


  
  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb/>
  }, [])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
      {/*<Navbar />*/}
      <Navigation active={active} setActive={setActive}/>
      <div className="container">
        <main>
          <h1>
           {displayData()}
          </h1>
        </main>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/sign-up" element={<SignupPage />} />
      </Routes>
      </div>

      </MainLayout>
      
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;


export default App;
