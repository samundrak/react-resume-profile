import React from 'react';
import { Button } from 'antd';
import cv from '../../samundra-khatri.pdf';

export default () => (
  <a href={cv} target="_blank" rel="noopener">
    <Button type="primary" icon="download" size="default">
      Download
    </Button>
  </a>
);
