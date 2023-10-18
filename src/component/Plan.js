
  import { useLocation, Link } from 'react-router-dom';
  import { TbBrandAppleArcade } from 'react-icons/tb';
  import { CgGames } from 'react-icons/cg';
  import { Switch } from '@mui/material';
  import { styled } from '@mui/material/styles';
  import { useState ,useEffect} from 'react';
  import { useDispatch } from 'react-redux';
  import {IoGameControllerOutline} from "react-icons/io5";
  import { setSelectedPlan, setMonthly, selectMonthly } from '../feautre/planReducer';
  import {  useSelector } from 'react-redux';


const CustomSwitch = styled(Switch)(({ theme }) => ({ 
}));


const Plan = () => {
    const location = useLocation();
    const dispatch = useDispatch();  
    const monthly = useSelector(selectMonthly);

const handleSwitchChange = () => {
  const newMonthly = !monthly;

  dispatch(setMonthly(newMonthly));
};

 

    return (
     
      <div className='form'>
        <img
          src='https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
          className='img-header'
          alt='img'
        />
        <ul>
          <Link className={location.pathname === '/' ? 'home-a' : 'home'} to='/'>
            1
          </Link>
          <Link className={location.pathname === '/plan' ? 'plan-a' : 'plan'} to='/plan'>
            2
          </Link>
          <Link className={location.pathname === '/add' ? 'add-a' : 'add'} to='/add'>
            3
          </Link>
          <Link className={location.pathname === '/summary' ? 'summary-a' : 'summary'} to='/summary'>
            4
          </Link>
        </ul>
        <div className='info'>
          <h1 className='h1-info'>Select your plan</h1>
          <span className='info-span'>You have the option of monthly or yearly billing.</span>
          <div className='info-plan'>
            <div className='arcade-continar' onClick={()=> dispatch(setSelectedPlan("arcade"))}>
                <TbBrandAppleArcade className='arcade-icons' />
              <div className='price-continar'>
              <h5>Arcade</h5>
              <span className='price'>{!monthly ? "$9/mo" : "$90/yr"}</span>
              {monthly &&  <span className='month-free'>2 month free</span>}
              </div>
            </div>
            <div className='arcade-continar' onClick={()=> dispatch(setSelectedPlan("advanced"))}>
  <CgGames className='advanced-icons' />
  <div className='price-continar'>
  <h5>Advanced</h5>
  <span className='price'>{!monthly ? "$12/mo" : "$120/yr"}</span>
  {monthly &&  <span className='month-free'>2 month free</span>}
  </div>
  </div>
  <div className='arcade-continar' onClick={()=>dispatch(setSelectedPlan("pro"))}>
  <IoGameControllerOutline className='pro-icons' />
  <div className='price-continar'>
  <h5>Pro</h5>
  <span className='price'> {!monthly ? "$15/mo" : "$150/yr"}</span>
  {monthly &&  <span className='month-free'>2 month free</span>}
  </div>
  </div>
          </div>
            <div className='switch'>
              <span className='monthly'>Monthly</span>
              <Switch onClick={handleSwitchChange} defaultChecked={monthly} />
          <span className='yearly'>yearly</span>
        </div>
        </div>     
        <div className='plan-btn-continar'>
          <Link to="/" className='back-plan'>Go Back</Link>
          <Link to='/add' className='info-btn-plan'>
            Nest Step
          </Link>
        </div>
      </div>
                
      
      
    );
  };

  export default Plan;