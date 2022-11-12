import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Componentes/PrimaryButton';

const DentalCard = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='ml-12'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
                
                <img src={treatment} className="rounded-lg lg:w-1/3 shadow-2xl" alt='' /> 
                
            </div>
        </div>
    );
};

export default DentalCard;