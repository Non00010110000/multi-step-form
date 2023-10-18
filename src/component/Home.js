import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    navigate('/plan'); 
  };

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className='form'>
      <img src='https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80' className='img-header' alt='img' />
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
      <div className='info-1'>
        <div>
          <span className='step'>STEP 1</span>
          <span className='route-name'>YOUR INFO</span>
        </div>
        <div>
          <span className='step'>STEP 2</span>
          <span className='route-name'>SELECT PLAN</span>
        </div>
        <div>
          <span className='step'>STEP 3</span>
          <span className='route-name'>ADD-ONS</span>
        </div>
        <div>
          <span className='step'>STEP 4</span>
          <span className='route-name'>SUMMARY</span>
        </div>
      </div>
      <div className='info'>
        <h1 className='h1-info'>Personal info</h1>
        <span className='info-span'>Please provide your name, email address, and phone number.</span>
        <form className='info-form' onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name
            <input {...register("name", { required: "Name is required" })} type='text' placeholder='e.g. Hussien Non' />
            {errors.name && <p>{errors.name.message}</p>}
          </label>
          <label>
            Email Address
            <input {...register("email", { required: "Email address is required" })} type='text' placeholder='e.g. nonhussien5@gmail.com' />
            {errors.email && <p>{errors.email.message}</p>}
          </label>
          <label>
            Phone Number
            <input {...register("phone", { required: "Phone number is required" })} type='number' placeholder='e.g. +963964838951' />
            {errors.phone && <p>{errors.phone.message}</p>}
          </label>
          <button className='info-btn-home' type='submit'>
            Next Step
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;