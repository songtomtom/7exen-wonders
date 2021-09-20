import React from 'react';
import { Col, Container, Input, Row, Table } from 'reactstrap';
import Topnav from '../components/topnav/topnav';

function Main() {
  const category = [
    {
      name: 'wonders'
    },
    {
      name: 'Coin'
    },
    {
      name: 'Conflict'
    },
    {
      name: '파랑'
    },
    {
      name: '노랑'
    },
    {
      name: '초록'
    },
    {
      name: '길드'
    },
    {
      name: '시티즈'
    },
    {
      name: '리더스'
    },
    {
      name: '아르마다'
    },
    {
      name: '아르마다'
    }
  ];

  const player = [{ name: 'Tom' }, { name: 'Yoon' }, { name: 'Kim' }];

  return (
    <Container fluid>
      <Row>
        <Col sm={2}>
          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {category &&
                category.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Col>

        <Col>
          <Table bordered>
            <thead>
              <tr>
                {player &&
                  player.map((item) => {
                    return <th>{item.name}</th>;
                  })}
              </tr>
            </thead>
            <tbody>
              {player &&
                category &&
                category.map(() => {
                  return (
                    <tr>
                      {player.map((item, index) => {
                        return (
                          <td>
                            <Input
                              type="number"
                              name={`count${index}`}
                              id="exampleEmail"
                            />
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}

              <tr>
                {player &&
                  player.map((item) => {
                    return (
                      <th>
                        <Input size={10} type="number" id="exampleEmail" />
                      </th>
                    );
                  })}
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
