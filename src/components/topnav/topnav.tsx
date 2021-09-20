import React from 'react';
import { Progress } from 'reactstrap';

function Topnav() {
  return (
    <div className="topnav">
      <h1>
        <strong>7EXEN</strong>WONDERS
      </h1>

      <Progress multi>
        <Progress className="7blue" bar value="15" />
        <Progress bar color="7green" value="15" />
        <Progress bar color="7yellow" value="15" />
        <Progress bar color="7red" value="15" />
        <Progress bar color="7purple" value="15" />
        <Progress bar color="7grey" value="15" />
        <Progress bar color="7brown" value="15" />
      </Progress>
    </div>
  );
}

export default Topnav;
