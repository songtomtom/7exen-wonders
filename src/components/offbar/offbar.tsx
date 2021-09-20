import React from 'react';
import classnames from 'classnames';
import { ILesson } from '@luxrobo/graphql-schema';

import { Card, CardImg, CardImgOverlay, CardTitle, Col, Row } from 'reactstrap';

interface OffbarProps {
  isExpanded: boolean;
  lessonConnectionNodeItems: Array<ILesson> | undefined;
  offbarRef: React.RefObject<HTMLDivElement>;
  onEpubLoad: (url: string) => void;
}

function Offbar({
  isExpanded,
  lessonConnectionNodeItems,
  offbarRef,
  onEpubLoad
}: OffbarProps) {
  return (
    <div
      ref={offbarRef}
      className={classnames('offbar', { expanded: isExpanded })}
    >
      <Row>
        <Col>
          {lessonConnectionNodeItems &&
            lessonConnectionNodeItems.map((lesson, i) => {
              return (
                <Card inverse key={i}>
                  <CardImg
                    width="100%"
                    src={lesson.mainImgs[0].url}
                    alt="Card image cap"
                  />
                  <CardImgOverlay
                    onClick={() => {
                      onEpubLoad(lesson.epubUrl);
                    }}
                  >
                    <CardTitle tag="h6">{lesson.title}</CardTitle>
                  </CardImgOverlay>
                </Card>
              );
            })}
        </Col>
      </Row>
    </div>
  );
}

export default Offbar;
