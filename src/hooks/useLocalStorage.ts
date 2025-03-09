import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useLocalStorageSync = () => {
    const cart = useSelector((state: RootState) => state.cart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart.items));
    }, [cart]);
};
