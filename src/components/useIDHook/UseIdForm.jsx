import { Card, Grid } from '@shopify/polaris'
import React from 'react'
import From from './From'

const UseIdForm = () => {
  return (
    <div>
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 12, xl: 12 }}>
          <div style={{ margin: "auto", marginTop: "1%", width: '50%' }}>
            <Card title="For User">
              <From />
            </Card>
          </div>
          <div style={{ margin: "auto", marginTop: "1%", width: '50%' }}>
            <Card title="For Admin">
              <From />
            </Card>
          </div>
        </Grid.Cell>
      </Grid>
    </div>
  )
}

export default UseIdForm
