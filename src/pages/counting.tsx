import React, { useState, useEffect } from 'react';
import { Col, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { CountCategory } from '../shared/enum';
import Players from '../shared/players';

interface IVictoryPoint {
  category: CountCategory;
  name: string;
  iconClass: string;
}

const VictoryPoint: Array<IVictoryPoint> = [
  {
    category: CountCategory.WONDERS,
    name: 'Wonders',
    iconClass: 'fas fa-landmark text-secondary'
  },
  {
    category: CountCategory.TREASURE,
    name: 'Treasure',
    iconClass: 'fas fa-coins text-warning'
  },
  {
    category: CountCategory.MILITARY,
    name: 'Military',
    iconClass: 'fas fa-chess-knight text-7red'
  },
  {
    category: CountCategory.BLUE,
    name: 'Civil',
    iconClass: 'fas fa-file text-7blue'
  },
  {
    category: CountCategory.YELLOW,
    name: 'Commercial',
    iconClass: 'fas fa-file text-7yellow'
  },
  {
    category: CountCategory.GREEN,
    name: 'Science',
    iconClass: 'fas fa-file text-7green'
  },
  {
    category: CountCategory.PURPLE,
    name: 'Guilds',
    iconClass: 'fas fa-file text-7purple'
  },
  {
    category: CountCategory.LEADERS,
    name: 'Leaders',
    iconClass: 'fas fa-grin-stars text-secondary'
  },
  {
    category: CountCategory.CITIES,
    name: 'Cities',
    iconClass: 'fas fa-building'
  },
  {
    category: CountCategory.NAVAL,
    name: 'Naval',
    iconClass: 'fas fa-anchor text-info'
  },
  {
    category: CountCategory.ISLAND,
    name: 'Island',
    iconClass: 'fab fa-docker text-info'
  }
];

function Counting() {
  const [score, setScore] = useState<Array<Array<number>>>(
    Players.map(() => VictoryPoint.map(() => 0))
  );

  const [totalScore, setTotalScore] = useState<Array<number>>(
    Players.map(() => 0)
  );

  useEffect(() => {
    const totalScore = score.map((item) => {
      return item.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );
    });
    setTotalScore([...totalScore]);
  }, [JSON.stringify(score)]);

  return (
    <Container className="counting">
      <Form>
        <FormGroup row>
          <Col sm={3} />
          {Players.map((item, index) => {
            return (
              <Col sm={3} key={index}>
                <i className="fas fa-chess-pawn" />
                {item.name}
              </Col>
            );
          })}
        </FormGroup>
        <hr />

        {VictoryPoint.map((item, index) => {
          return (
            <FormGroup key={index} row>
              <Label sm={3}>
                <i className={item.iconClass} />
                {item.name}
              </Label>
              {Players.map((subitem, subindex) => {
                return (
                  <Col key={subindex} sm={3}>
                    <Input
                      type="number"
                      defaultValue={0}
                      onChange={(e) => {
                        score[subindex][index] = Number(e.target.value);
                        setScore([...score]);
                      }}
                      onFocus={(e) => {
                        e.target.select();
                      }}
                    />
                  </Col>
                );
              })}
            </FormGroup>
          );
        })}

        <hr />

        <FormGroup row>
          <Col sm={3}>
            <i className="fas fa-plus" /> <strong>Total Victory Point</strong>
          </Col>
          {totalScore.map((item, index) => {
            return (
              <Col key={index} sm={3}>
                <strong>{item}</strong>
              </Col>
            );
          })}
        </FormGroup>
      </Form>
    </Container>
  );
}

export default Counting;
