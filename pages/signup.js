import React, { useState } from "react";
import { Form, Input, Button, Divider, Layout, Alert, InputNumber } from 'antd';
import Link from "next/link";
import axios from "axios";
import catchErrors from "../utils/catchErrors";
import baseUrl from "../utils/baseUrl";
import {handleLogin} from "../utils/auth";
const { Content } = Layout;

const INITIAL_USER = {
  name:"",
  phone:"",
  email: "",
  password: ""
};

function Signup() {

  const [user, setUser] = useState(INITIAL_USER);
  const [error, setError] = useState("");


  React.useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [user]);


  function handleChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  async function handleFinish() {

    try {
      const url = `${baseUrl}/api/signup`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      handleLogin(response.data);
      console.log(response);
    } catch (error) {
      catchErrors(error, setError);
    }
  }



  let errrors = null;
  if (error.length > 0) {
    errrors = <Alert message={error} type="error" showIcon />
  }


  const formItemLayout = {
    labelCol: {
      xs: {
        span: 23,
      },
      sm: {
        span: 8,
      },
    }
  };

  return (
    <>
      <Layout className="layout">
        <Content className="content" >
          <div className="site-layout-background">
            <h1> Register </h1>
            {errrors}

            <Divider />

            <Form onFinish={handleFinish} {...formItemLayout}>

            <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please Enter Your Name!' }]}>
                <Input
                  name="name"
                  className="input"
                  size="large"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item name="phone" label="Phone" rules={[{ required: true, message: 'Please Enter Your Phone!' }]}>
                <Input 
                 name="phone"
                 className="input"
                 size="large"
                 placeholder="Phone"
                 onChange={handleChange}
                 type="number"
                />
              </Form.Item>

              <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please Enter Your Email!' }]}>
                <Input
                  name="email"
                  className="input"
                  size="large"
                  placeholder="Email"
                  onChange={handleChange}
                  type="email"
                />
              </Form.Item>

              <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please Enter Your Password!' }]}>
                <Input
                  name="password"
                  className="input"
                  size="large"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item name="confirmpassword"  label="Confirm Password" rules={[{ required: true, message: 'Please Enter Your Password Agian!' }]}>
                <Input
                  name="confirm password"
                  className="input"
                  size="large"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item >
                <Button type="primary" htmlType="submit" shape="round" size="large" >
                  Register
                </Button>
              </Form.Item>

            </Form>

          </div>
        </Content>
      </Layout>
    </>
  );
}

export default Signup;
