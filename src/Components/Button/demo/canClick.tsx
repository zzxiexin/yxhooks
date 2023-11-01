import React from 'react';
import { Button } from 'react-ui-dumi-library';
import '../../style.scss';
export default function App() {
  return (
    <div id="component-demo">
      <Button type="primary" debounce={3} onClick={() => console.log('click')}>
        防抖按钮
      </Button>
    </div>
  );
}