import { FC } from 'react';
import Link from "next/link";
import dynamic from 'next/dynamic';
import React, { useState } from "react";
import { useAutoConnect } from '../contexts/AutoConnectProvider';
import NetworkSwitcher from './NetworkSwitcher';
import NavElement from './nav-element';
import me from '../assets/magiceden.png';

const webL = () => {
	window.open("https://www.optimus-coin.com/");
}

const tg = () => {
	window.open("https://t.me/+viYwjSVwA-gyMjBi");
}

const tweet = () => {
	window.open("https://x.com/OPT_Coin");
}

const discrd = () => {
	window.open("https://discord.com/invite/ECbap74F");
}

const ig = () => {
	window.open("https://www.instagram.com/optimus_coin");
}

const ytube = () => {
	window.open("https://www.youtube.com/@Optimus_Tokens");
}

const tt = () => {
	window.open("https://www.tiktok.com/@optimus_coin1");
}

const github = () => {
	window.open("https://github.com/ChethaniSaumya/optimusbadassbots");
}

const me = () => {
	window.open("https://magiceden.io/marketplace/optimus_badassbots");
}

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex flex-row md:mb-2 shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66">
        <div className="navbar-start align-items-center">
          <div className="hidden sm:inline w-22 h-22 md:p-2 ml-10">
          <img className='logo' src="https://optimusassets.pages.dev/imgs/238.png"/>
           </div>
          <WalletMultiButtonDynamic className="btn-ghost btn-sm relative flex md:hidden text-lg " />
        </div>

        {/* Nav Links */}
        {/* Wallet & Settings */}
        <div className="navbar-end">
          <div className="hidden md:inline-flex align-items-center justify-items gap-6">
          <img className='me' src="https://optimusassets.pages.dev/imgs/magiceden.png" onClick={me}/>
          <img className='me' src="https://social-c3e.pages.dev/imgs/discord.png" onClick={discrd}/>
          <img className='me' src="https://social-c3e.pages.dev/imgs/twitter (1).png" onClick={tweet}/>
          <img className='me' src="https://social-op.pages.dev/imgs/telegram.png" onClick={tg}/>
          <img className='me' src="https://social-op.pages.dev/imgs/instagram.png" onClick={ig}/>
          <img className='me' src="https://social-op.pages.dev/imgs/youtube.png" onClick={ytube}/>
          <img className='me' src="https://social-op.pages.dev/imgs/tiktok.png" onClick={tt}/>
          <img className='me' src="https://social-op.pages.dev/imgs/global.png" onClick={webL}/>
          <img className='me' src="https://social-op.pages.dev/imgs/github.png" onClick={github}/>

          <WalletMultiButtonDynamic className="btn-ghost btn-sm rounded-btn text-lg mr-6 " />
        </div>
  
        <div className="dropdown dropdown-end">
           
          <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52">
            <li>
              <div className="form-control bg-opacity-100">
                <label className="cursor-pointer label">
                  <a>Autoconnect</a>
                  <input type="checkbox" checked={autoConnect} onChange={(e) => setAutoConnect(e.target.checked)} className="toggle" />
                </label>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};
