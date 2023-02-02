import React, { useState } from 'react'
import { InputNumber, Button } from 'antd';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';

TweenOne.plugins.push(Children);


function DemoCounter() {
  const [value, setValue] = useState({
    value: 10000,
    animation: null,
  });

  const onClick = () => {
    setValue({
      animation: {
        Children: {
          value: typeof value.value === 'number' ? value.value : 10000, floatLength: 0,
        },
        duration: 1000,
      }
    })
  }


  return (
    <div>
      <div
        style={{
          display: 'flex',
          height: '100%',
          minHeight: '220px',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{ width: '100%' }}>
          <TweenOne
            animation={value.animation}
            style={{ fontSize: 56, marginBottom: 12 }}
          >
            0
          </TweenOne>
          <InputNumber
            defaultValue={value.value}
            onChange={(e) => {
              setValue({
                value: e,
                animation: null,
              })
            }}
          />

          <Button
            type="primary"
            style={{ marginBottom: 32 }}
            onClick={() => { onClick() }}
          >
            Start
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DemoCounter
