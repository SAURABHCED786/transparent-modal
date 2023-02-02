import React from 'react'
import { Form, Input, Button } from 'antd';
import { Card, } from '@shopify/polaris';
import { useId } from 'react';

const From = () => {
  const id = useId()
  const onFinish = () => {
    let nameUser = document.getElementById(":r0:username")
    let lastNameUsr = document.getElementById(":r0:userlstname")
    let ageUser = document.getElementById(":r0:userage")
    let nameAdmin = document.getElementById(":r1:username")
    let lastNameAdmin = document.getElementById(":r1:userlstname")
    let ageAdmin = document.getElementById(":r1:userage")
    // User Data
    console.log(nameUser["value"]);
    console.log(lastNameUsr["value"]);
    console.log(ageUser["value"]);
    // Admin Data
    console.log(nameAdmin["value"]);
    console.log(lastNameAdmin["value"]);
    console.log(ageAdmin["value"]);

  };

  const onFinishFailed = () => {
    console.log('Failed:');
  };
  return (
    <div>
      <Form name="form_item_path" layout="vertical" onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Card.Section>
          <div style={{ marginTop: "10px" }}>
            <Input id={id + "username"} placeholder="Enter Name" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <Input id={id + "userlstname"} placeholder="Enter Last Name" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <Input id={id + "userage"} placeholder="Enter Age" />
          </div>
          <div style={{ marginTop: "10px" }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Card.Section>
      </Form>
    </div>
  )
}

export default From
