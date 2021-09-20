import React from 'react';
import { useSelector } from 'react-redux';

import TopnavComponent from '../components/topnav/topnav';
import {} from '../store/actions/actions';
import { RootState } from '../store/reducers/reducers';

interface TopnavProps {
  onExpanded: () => void;
  onOpen: () => void;
}

function useEbookSelector() {
  return useSelector((state: RootState) => state.ebook);
}

function Topnav({ onExpanded, onOpen }: TopnavProps) {
  const { percent } = useEbookSelector();

  return (
    <TopnavComponent
      onExpanded={onExpanded}
      onOpen={onOpen}
      percent={percent || 0}
    />
  );
}

export default Topnav;
