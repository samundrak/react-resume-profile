import React from 'react';
import { Col, Row } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { normalizeSkillForChart } from '../../utils';

export default ({ items: skills }) => (
  <React.Fragment>
    <BarChart
      width={600}
      height={300}
      data={normalizeSkillForChart(skills)}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Bar dataKey="years" stackId="a" fill="#8884d8" />
    </BarChart>
    <Row>
      <Col span={12} offset={6}>
        <h4>
          <u>
            <i>Years i worked with technology.</i>
          </u>
        </h4>
      </Col>
    </Row>
  </React.Fragment>
);
