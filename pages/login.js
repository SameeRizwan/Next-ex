import React, { useState } from "react";
import { Form, Input, Button, Divider, Layout, Alert } from 'antd';
import { UserOutlined, LockOutlined, FacebookFilled, GooglePlusSquareFilled, } from '@ant-design/icons';
import Link from "next/link";
import axios from "axios";
import catchErrors from "../utils/catchErrors";
import baseUrl from "../utils/baseUrl";
import { handleLogin } from "../utils/auth";

const { Content } = Layout;

const INITIAL_USER = {
  email: "",
  password: ""
};

function Login() {

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
      const url = `${baseUrl}/api/login`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      console.log(response);
      handleLogin(response.data);
    } catch (error) {
      catchErrors(error, setError);
    }

  }


  function handlegoogle(event) {
    event.preventDefault();
    // console.log('http://localhost:3000/auth/google');
    // window.location.replace("http://localhost:3000/auth/google");

  }

  function handlefacebook(event) {
    event.preventDefault();
    // console.log('http://localhost:3000/auth/facebook');
    // window.location.replace("http://localhost:3000/auth/facebook");
  }


  let errrors = null;
  // if (error.length > 0) {
  //   console.log("Size greater then 1");
  //   errrors =
  //     <div>
  //       {error.map((err, index) => {
  //         return <> <Alert message={err} type="error" showIcon key={index} />  <br /> </>
  //       })}
  //     </div>
  // }
  if (error.length > 0) {
    errrors = <Alert message={error} type="error" showIcon />
  }


  return (
    <>
      <Layout className="layout">
        <Content className="content" >
          <div className="site-layout-background">
            <h1> Login </h1>
            {errrors}

            <Divider />

            <Form onFinish={handleFinish}>
              <Form.Item name="username" rules={[{ required: true, message: 'Please input your Email!' }]}>
                <Input
                  name="email"
                  className="input"
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="Username"
                  onChange={handleChange}
                  type="email"
                />
              </Form.Item>

              <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input
                  name="password"
                  className="input"
                  size="large"
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item>
                <Link href="">
                  <a>
                    Forgot password
                  </a>
                </Link>
              </Form.Item>

              <Form.Item >
                <Button type="primary" htmlType="submit" shape="round" size="large">
                  Log in
                </Button>
              </Form.Item>

            </Form>

            <Button shape="round" icon={<FacebookFilled />} size="large" onClick={handlegoogle}>
              Sign in with Facebook
            </Button>

            <Divider style={{ margin: "2px" }} />

            <Button shape="round" icon={<GooglePlusSquareFilled />} size="large" onClick={handlefacebook}>
              Sign in with Google
            </Button>

          </div>
        </Content>
      </Layout>
    </>
  );
}

export default Login;
