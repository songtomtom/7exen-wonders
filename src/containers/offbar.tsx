import React, { useCallback, useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import {
  ELessonGroupType,
  ELessonOpenType,
  ELessonServiceType,
  ILessonConnection,
  ILessonConnectionOutput,
  QUERY_LESSON_CONNECTION
} from '@luxrobo/graphql-schema';
import { saveEbookUrlAction } from '../store/actions/actions';

import OffbarComponent from '../components/offbar/offbar';

interface OffbarProps {
  isExpanded: boolean;
  onExpanded: () => void;
}

function useLessonConnectionNodeItems() {
  const { data } = useQuery<ILessonConnectionOutput, ILessonConnection>(
    QUERY_LESSON_CONNECTION,
    {
      variables: {
        first: 20,
        where: {
          serviceType: ELessonServiceType.LMS,
          groupType: ELessonGroupType.ELEMENT_HIGH_GROUP,
          openType: ELessonOpenType.OPEN,
          recommendBestLesson: {
            year: moment().year(),
            month: moment().month() + 1
          }
        }
      },
      fetchPolicy: 'cache-and-network'
    }
  );

  return data ? data.lessonConnection.nodes : undefined;
}

function Offbar({ isExpanded, onExpanded }: OffbarProps) {
  const dispatch = useDispatch();

  const lessonConnectionNodeItems = useLessonConnectionNodeItems();
  const offbarRef = useRef<HTMLDivElement>(null);

  const onEpubLoad = useCallback((url: string) => {
    dispatch(saveEbookUrlAction({ url }));
  }, []);

  useEffect(() => {
    function onOutsideClick(e: MouseEvent) {
      if (offbarRef.current && !offbarRef.current.contains(e.target as Node)) {
        onExpanded();
      }
    }
    document.addEventListener('mousedown', onOutsideClick);
    return document.removeEventListener('mousedown', onOutsideClick);
  }, [offbarRef]);

  return (
    <OffbarComponent
      offbarRef={offbarRef}
      isExpanded={isExpanded}
      lessonConnectionNodeItems={lessonConnectionNodeItems}
      onEpubLoad={onEpubLoad}
    />
  );
}

export default Offbar;
