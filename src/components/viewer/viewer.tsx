import React from 'react';
import { Location } from 'epubjs';

import { Col, Container, Row } from 'reactstrap';
import Topnav from '../../containers/topnav';
import Reader from '../../containers/reader';
import Offbar from '../../containers/offbar';

interface ViewerProps {
  cfi: string | null;
  isExpanded: boolean;
  isOpen: boolean;
  onExpanded: () => void;
  onOpen: () => void;
  onRelocated?: (location?: Location) => void;
}

function Viewer({
  cfi,
  isExpanded,
  isOpen,
  onExpanded,
  onOpen,
  onRelocated
}: ViewerProps) {
  return (
    <Container className="m-0" fluid>
      <Row>
        <Col>
          <Topnav onExpanded={onExpanded} onOpen={onOpen} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Reader cfi={cfi} isOpen={isOpen} onRelocated={onRelocated} />
          <Offbar isExpanded={isExpanded} onExpanded={onExpanded} />
        </Col>
      </Row>
    </Container>
  );
}

export default Viewer;
