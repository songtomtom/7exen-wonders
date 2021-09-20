import React from 'react';
import { Progress } from 'reactstrap';

interface TopnavProgressProps {
  percent: number;
}

function TopnavProgress({ percent }: TopnavProgressProps) {
  return (
    <div className="topnav-progress">
      <Progress value={percent} color="warning" />
    </div>
  );
}

export default TopnavProgress;
