import React from 'react';
import Posts from './Posts';
import SideBar from './SideBar';
import Stories from './Stories';

function Corpo() {
  return (
    <div>
      <div class="corpo">
        <div class="esquerda">
          <Stories />
          <Posts />
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default Corpo;
