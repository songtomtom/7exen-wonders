import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function Sidebar() {
  return (
    <div className="sidebar">
      <ListGroup>
        <ListGroupItem active tag="a" href="#" action>
          Counting Victory Points
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Season Ranking
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Morbi leo risus
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Porta ac consectetur ac
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Vestibulum at eros
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default Sidebar;
