import { useState } from 'react';

interface Props {
  tagline: string
}

const Header = (props: Props) => {
  return (
    <header className="top">
      <h1>
        <span>Catch</span>
        <span className="ofThe">
            <span className="of">of</span> 
            <span className="the">the</span> 
        </span>
        <span>Day</span>
      </h1>
      <h3 className="tagline">
          <span>{props.tagline}</span>
      </h3>
    </header>
  )
}

export default Header;