import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/reducers';

import TopnavHeadlineComponent from '../components/topnav/topnav-headline';

function useEbookSelector() {
  return useSelector((state: RootState) => state.ebook);
}

function TopnavHeadline() {
  const { creator, title } = useEbookSelector();

  return <TopnavHeadlineComponent creator={creator} title={title} />;
}

export default TopnavHeadline;
