import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import React from 'react';
import "./css/navBarStyle.css";

function NavbarApp() {
  return (
    <header className='headerApp'>
      <div className='logo'>
        <img src="/images/logo.png" alt="" width={64} height={64}/>
        <h2>Noolar</h2>
      </div>
      <div className='userArea'>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}

export default NavbarApp;
