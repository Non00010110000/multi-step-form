import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { TbMoodHappy } from 'react-icons/tb';
import { useSelector, useDispatch } from 'react-redux';

import { selectPlan,    selectOnlineService,
  selectStorage,
  selectCustomizable, } from '../feautre/planReducer';

const Summary = () => {
  const plan = useSelector(selectPlan);
  const location = useLocation();
  const [confirm, setConfirm] = useState(false);
  const { selectedPlan, monthly, onlineService, storage, customizable } = plan;

  const dispatch = useDispatch();
  const st = useSelector(selectStorage)
  const on = useSelector(selectOnlineService)
  const cu = useSelector(selectCustomizable) 
  const calculateTotalPrice = () => {
    let totalPrice = !monthly  ? 9 : 90 ;


    if (selectedPlan === "Arcade") {
      totalPrice += monthly ? 9 : 90;
    } else if (selectedPlan === "Pro") {
      totalPrice += monthly ? 12 : 120;
    }

    
    if (on) {
      totalPrice += !monthly ? 1 : 10;
    }
    if (st) {
      totalPrice += !monthly ? 2 : 20;
    }
    if (cu) {
      totalPrice += !monthly ? 2 : 20;
    }

    return totalPrice;
  };

    return (
      <div className='form'>
        <img
          src='https://images.unsplash.com/photo-1622737133809-d95047b9e673'
          className='img-header'
          alt='img'
        />
        <ul>
          <Link
            className={location.pathname === '/' ? 'home-a' : 'home'}
            to='/'
          >
            1
          </Link>
          <Link
            className={location.pathname === '/plan' ? 'plan-a' : 'plan'}
            to='/plan'
          >
            2
          </Link>
          <Link
            className={location.pathname === '/add' ? 'add-a' : 'add'}
            to='/add'
          >
            3
          </Link>
          <Link
            className={location.pathname === '/summary' ? 'summary-a' : 'summary'}
            to='/summary'
          >
            4
          </Link>
        </ul>
        
        {!confirm ? (
        <>
          <div className='info-summary'>
            <h1 className='h1-info'>Finshing up</h1>
            <span className='info-span'>
              Double check everything looks OK before confirming
            </span>

            <div className='finshing-details'>
              <div className='d-1'>
                <div>
                  <span className='monthly-Arcade'> <i className='firstUpper'>{selectedPlan}</i> {!monthly ? "(Monthly)" : "(Yearly)"}</span>
                </div>
                <div>
                  <Link className='link-change' to='/plan'>
                    Change
                  </Link>
                </div>
                <span className='summary-price'>{!monthly ? "+9$/mo" : "$90/yr" }</span>
              </div>
              <hr />
         {on && (
               <div className='d-2'>
               <span>Online service</span>
               <span className='price-summary-2'>{!monthly ? "+1$/mo" : "$10/yr"}</span>
               
             </div>
         )}
 {st  && (
               <div className='d-3'>
               <span>Larger storage</span>
               <span className='price-summary-2'>{!monthly ? "+2$/mo" : "$20/yr"}</span>
             </div>
 )}
 {cu  && (
               <div className='d-3'>
               <span>customizable profile</span>
               <span className='price-summary-2'>{!monthly ? "+2$/mo" : "$20/yr"}</span>
             </div>
 )}
 
            </div>

            <div className='total'>
              <div className='total-per'>Total (Per {monthly ? "Yearly": "Monthly"})</div>
              <div className='total-price'>{ calculateTotalPrice()}</div>
            </div>
            
            
          </div>
          <div className='plan-btn-continar'>
              <Link to='/add' className='back-plan'>
                Go Back
              </Link>
              <Link
                to='/summary'
                className='info-btn-summary'
                onClick={() => setConfirm(!confirm)}
              >
                Confirm
              </Link>
            </div>
          </>
        ) : 
        <div className='thanks'>
          <TbMoodHappy className='thanks-icon'/>
  <h1 className='thanks-h1'>Thank you!</h1>
  <span className='thanks-bla'>
    Thanks for confirming your subscription we hope you have fun using our platform,if you ever need support please feel free to email us at nonhussien5@gmail.com.
  </span>
        </div>
        }
      </div>
    );
  };

  export default Summary;