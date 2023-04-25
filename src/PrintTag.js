import React from 'react';
import ReactDOM from 'react-dom/client';
import { useSearchParams, useLocation } from "react-router-dom";

import _0 from './res/tags/Tag36h11/0.png';
import _1 from './res/tags/Tag36h11/1.png';
import _2 from './res/tags/Tag36h11/2.png';
import _3 from './res/tags/Tag36h11/3.png';
import _4 from './res/tags/Tag36h11/4.png';
import _5 from './res/tags/Tag36h11/5.png';
import _6 from './res/tags/Tag36h11/6.png';
import _7 from './res/tags/Tag36h11/7.png';
import _8 from './res/tags/Tag36h11/8.png';
import _9 from './res/tags/Tag36h11/9.png';
import _10 from './res/tags/Tag36h11/10.png';
import _11 from './res/tags/Tag36h11/11.png';
import _12 from './res/tags/Tag36h11/12.png';
import _13 from './res/tags/Tag36h11/13.png';
import _14 from './res/tags/Tag36h11/14.png';
import _15 from './res/tags/Tag36h11/15.png';

import _500 from './res/tags/Tag36h11/500.png';
import _501 from './res/tags/Tag36h11/501.png';
import _502 from './res/tags/Tag36h11/502.png';
import _503 from './res/tags/Tag36h11/503.png';
import _504 from './res/tags/Tag36h11/504.png';
import _505 from './res/tags/Tag36h11/505.png';
import _506 from './res/tags/Tag36h11/506.png';
import _507 from './res/tags/Tag36h11/507.png';
import _508 from './res/tags/Tag36h11/508.png';
import _509 from './res/tags/Tag36h11/509.png';

const itemsTagsArry = [
  _0
  , _1
  , _2
  , _3
  , _4
  , _5
  , _6
  , _7
  , _8
  , _9
  , _10
  , _11
  , _12
  , _13
  , _14
  , _15
];

const storagesTagsArry = [
  _500
  , _501
  , _502
  , _503
  , _504
  , _505
  , _506
  , _507
  , _508
  , _509
];

function PrintTag() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  
  const id = params.get("id");
  const storageId = params.get("storage");
  const name = params.get("name");
  console.log(`id = ${id}; storageId = ${storageId}`);


   return  (
    <div>
      <table style={{textAlign: 'center', width: 400}}>
        <tr>
          <td>
            <img style={{width: 100}} src={itemsTagsArry[id]} />
          </td>
          <td>
            <img style={{width: 200}} src={storagesTagsArry[storageId - 500]} />
          </td>
        </tr>
        <tr>
          <td style={{fontWeight: 'bold'}}>{id} - {name}</td>
          <td>{storageId}</td>
        </tr>
      </table>
    </div>
   );
}

export default PrintTag;