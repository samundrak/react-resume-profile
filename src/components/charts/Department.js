import React from 'react';
import { Col, Row } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default ({ department }) => (
  <React.Fragment>
    <BarChart
      width={600}
      height={300}
      data={department}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="title" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Bar dataKey="rate" stackId="a" fill="#FFBB28" />
    </BarChart>
    <Row>
      <Col span={12} offset={6}>
        <h4>
          <u>
            <i>Rating my expertise on department on scale out of 10.</i>
          </u>
        </h4>
      </Col>
    </Row>
  </React.Fragment>
);
