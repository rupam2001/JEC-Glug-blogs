import React from 'react';
import Footer from './footer';
import HamBurgerMenu from './hamburgerMenu';

export default function Layout({ children }) {
    return (
        <div>
            <HamBurgerMenu />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}