import React from 'react';
import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table
} from 'reactstrap';
import { CountCategory } from '../shared/enum';

interface ICountTables {
  category: CountCategory;
  name: string;
  color?: string;
}

const countTables: Array<ICountTables> = [
  {
    category: CountCategory.WONDERS,
    name: 'Wonders Board'
  },
  {
    category: CountCategory.TREASURE,
    name: 'Treasure'
  },
  {
    category: CountCategory.MILITARY,
    name: 'Military Conflicts'
  },
  {
    category: CountCategory.BLUE,
    name: 'Blue Cards',
    color: ''
  },
  {
    category: CountCategory.YELLOW,
    name: 'Yellow Cards',
    color: ''
  },
  {
    category: CountCategory.GREEN,
    name: 'Green Cards',
    color: ''
  },
  {
    category: CountCategory.PURPLE,
    name: 'Purple Cards',
    color: ''
  },
  {
    category: CountCategory.LEADERS,
    name: 'Leaders Cards',
    color: ''
  },
  {
    category: CountCategory.CITIES,
    name: 'Cities Cards',
    color: ''
  },
  {
    category: CountCategory.NAVAL,
    name: 'Naval Conflicts'
  },
  {
    category: CountCategory.ISLAND,
    name: 'Island Cards'
  }
];

function Counting() {
  const player = [{ name: 'Tom' }, { name: 'Yoon' }, { name: 'Kim' }];

  return (
    <Container className="counting">
      <Form>
        {countTables.map((item) => {
          return (
            <FormGroup row>
              <Label sm={3}>{item.name}</Label>
              <Col sm={3}>
                <Input inli type="number" name="email" id="exampleEmail" />
              </Col>
              <Col sm={3}>
                <Input inli type="number" name="email" id="exampleEmail" />
              </Col>
              <Col sm={3}>
                <Input inli type="number" name="email" id="exampleEmail" />
              </Col>
            </FormGroup>
          );
        })}
      </Form>
    </Container>
  );
}

export default Counting;
