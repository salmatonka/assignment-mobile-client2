import React from 'react'
import useTitle from '../../Hooks/useTitle';
import HeadLine from './HeadLine';
import HomeBanner from './HomeBanner';
import Categories from '../Categories/Categories';
import SourcingPage from './SourcingPage';
import ChooseOption from './ChooseOption';
import Reviews from './Reviews';
import MobilePrice from './MobilePrice';
import OfferPhones from './OfferPhones';
import Products from '../Products/Products';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            
             < HeadLine />
            < HomeBanner />
            <Categories />
            <Products />
            < SourcingPage />
            < ChooseOption />
            < Reviews />
            < MobilePrice />
            < OfferPhones />
        </div>
    );
};


export default Home
