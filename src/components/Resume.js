import React from 'react';
import { Button } from 'antd';

const PDF_PATH = 'https://www.pdf-archive.com/2018/03/05/samundra-kc-4/samundra-kc-4.pdf';
export default () => (
    <a href={PDF_PATH} target="_blank" rel="noopener">
        <Button type="primary" icon="download" size={'medium'}>Download</Button>
    </a>
)