  import React from 'react';
  import { useLocation, Link } from 'react-router-dom';
  import { Switch } from '@mui/material';
  import { styled } from '@mui/material/styles';

  import {
    selectPlan,
    selectMonthly,
    selectOnlineService,
    selectStorage,
    selectCustomizable,
    setOnlineService,
    setStorage,
    setCustomizable,
  } from '../feautre/planReducer';
  import { useSelector,useDispatch } from 'react-redux';
  import { useState } from 'react';


  const CustomSwitch = styled(Switch)(({ theme }) => ({
  }));

  const Add = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const plan = useSelector(selectPlan);
    const selectedPlan = plan.selectedPlan;
    const monthly = useSelector(selectMonthly);
  
   
  const onlineService = useSelector(selectOnlineService);
  const storage = useSelector(selectStorage);
  const customizable = useSelector(selectCustomizable);

  const handleOnlineServiceChange = () => {
    dispatch(setOnlineService(!onlineService));
  };

  const handleStorageChange = () => {
    dispatch(setStorage(!storage));
  };

  const handleCustomizableChange = () => {
    dispatch(setCustomizable(!customizable));
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
          <h1 className='h1-info'>pick add-ons</h1>
          <span className='info-span'>Add-ons help enhance your gaming experince.</span>
          <div className='info-add'>
            <div className={ onlineService ?"online-service-active" : 'online-service'}>
              <input className={"checkbox"}  checked={onlineService}
            onChange={handleOnlineServiceChange} type='checkbox'/> 
              <div className='online-details'>
              <h2 className='online'>Online service</h2> 
              <span className='games'>Access to multiplayer games</span>
              </div>
              
              <span className='add-free1'>{!monthly ? "+$1/mo" : "+$10/yr"}</span>
            </div>
            <div className={ storage ?"online-service-active" : 'online-service'}>
            <input className={storage? "checkbox-active": 'checkbox'} checked={storage}
            onChange={handleStorageChange}  type='checkbox'/> 
            <div className='online-details'>
              <h2 className='online'>Larger storage</h2> 
              <span className='games'>Extra 1TB    of cloud save</span>

            </div>
              <span className='add-free2'>{!monthly ? "+$2/mo" : "+$20/yr"}</span>
              
            </div>
            <div className={ customizable ?"online-service-active" : 'online-service'}>
            <input className={ customizable? "checkbox-active": 'checkbox'}  checked={customizable}
            onChange={handleCustomizableChange}  type='checkbox'/> 
            <div className='online-details'>
              <h2 className='online'>customizable profile</h2> 
              <span className='games'>Custom theme on yuor profile</span>

            </div>
              <span className='add-free3'>{!monthly ? "+$2/mo" : "+$20/yr"}</span>
            </div>
          </div>
        </div>     
        <div className='plan-btn-continar'>
          <Link to="/plan" className='back-plan'>Go Back</Link>
          <Link to='/summary' className='info-btn-add'>
            Nest Step
          </Link>
        </div>
      </div>
    );
  };

  export default Add;