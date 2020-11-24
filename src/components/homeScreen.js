import React from 'react';
import { useSelector } from 'react-redux';

export const HomeScreen = () => {

    const { name } = useSelector( state => state.auth);

    return (
        <div>
            <h1>Hola { name }!</h1>
        </div>
        )
}