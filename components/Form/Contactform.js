import React, { useState } from "react";
import { Form, Input, Divider, Layout, Alert, Row, Col, Button } from 'antd';
const { Content } = Layout;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 23,
        },
        sm: {
            span: 4,
        },
    }
};



function PersonForm(props) {

    const [error, setError] = useState("");


    // React.useEffect(() => {
    //     console.log(person);
    // }, [person])


    function handleChange(event) {

    }


    function handleFinish() {

    }


    let message = null;
    if (error.length > 0) {
        message = <Alert message={error} type="error" showIcon />
    }


    return <>

        <div className="form">
            <div id="sendmessage">{message}</div>
            <div id="errormessage">{message}</div>
            <Form onFinish={handleFinish} className="contactForm">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <Form.Item name="name" rules={[{ required: true, message: 'Please Enter Your Name!' }]} >
                            <Input
                                name="name"
                                size="large"
                                placeholder="Name"
                                onChange={handleChange}
                            />
                        </Form.Item>
                    </div>
                    <div className="form-group col-md-6">
                        <Form.Item name="email" rules={[{ required: true, message: 'Please Enter Your Email!' }]} >
                            <Input
                                name="email"
                                size="large"
                                placeholder="Email"
                                onChange={handleChange}
                                type="email"
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="form-group">
                    <Form.Item name="subject" rules={[{ required: true, message: 'Please Enter Your Subject!' }]} >
                        <Input
                            name="subject"
                            size="large"
                            placeholder="Subject"
                            onChange={handleChange}
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                <Form.Item name="message" rules={[{ required: true, message: 'Please Enter Your Message!' }]} >
                        <Input.TextArea
                            name="message"
                            size="large"
                            placeholder="Message"
                            onChange={handleChange}
                        />
                    </Form.Item>
                </div>
                <div className="text-center">
                    <Button size="large" htmlType="submit" style={{padding:"6px 35px"}}>
                        Send Message
                    </Button>
                </div>
            </Form>
        </div>
    </>

}

export default PersonForm;
