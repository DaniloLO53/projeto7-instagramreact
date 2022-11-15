import React from 'react';
import Posts from './Posts';
import SideBar from './SideBar';
import Stories from './Stories';

function Corpo() {
  return (
    <div>
      <div className="corpo">
        <div className="esquerda">
          <Stories />
          <Posts />
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default Corpo;
