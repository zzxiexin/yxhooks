import { HomeOutlined } from '@ant-design/icons';
import React from 'react';
import { Button } from 'yxhooks';
import '../../style.scss';
export default function App() {
  return (
    <div id="component-demo">
      <Button type="primary" icon={<HomeOutlined style={{ marginRight: 5 }} />}>
        icon
      </Button>
    </div>
  );
}
