import React from "react";
import "./style.scss";
import 'antd/dist/antd.css';
import { Upload, message, Form, Input, Button } from 'antd';

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const layout = {
labelCol: {
span: 8,
},
wrapperCol: {
span: 16,
},
};
const tailLayout = {
wrapperCol: {
offset: 8,
span: 16,
},
};

function RegisterC() {

const onFinish = values => {
console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
console.log('Failed:', errorInfo);
};
return (
<div className='sign register d_flex a_items_center j_content_center'>
    <div className='sign-block'>
        <div className='logo'>
            <img src={require('./../../assets/img/logo.png')} alt="logo" />
        </div>
        <div className='block-title'>
            <h3>Register a company</h3>
        </div>
        <div className='form'>
            <Form {...layout} name="basic" initialValues={{remember: true,}} onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <div className='form-item-list d_flex'>
                    <div className='form-item-block'>
                        <Form.Item name="username" rules={[ { required: true, message: 'Please input your name!' , }, ]}>
                            <Input placeholder="&nbsp;" />
                            <span class="input-area-placeholder">First Name</span>
                        </Form.Item>

                        <Form.Item name="username" rules={[ { required: true, message: 'Please input your surname!' , }, ]}>
                            <Input placeholder="&nbsp;" type="password"/>
                            <span class="input-area-placeholder">Last Name</span>
                        </Form.Item>

                        <Form.Item name="username" rules={[ { required: true, message: 'Please input your email!' , }, ]}>
                            <Input placeholder="&nbsp;" type="email"/>
                            <span class="input-area-placeholder">Email</span>
                        </Form.Item>
                        
                        <Form.Item name="username" rules={[ { required: true, message: 'Please input your phone number!' , }, ]}>
                            <Input placeholder="&nbsp;" type="tel"/>
                            <span class="input-area-placeholder">Phone number</span>
                        </Form.Item>
                    </div>
                    <div className='form-item-block'>
                        <Form.Item name="username" rules={[ { required: true, message: 'Please input your company name!' , }, ]}>
                            <Input placeholder="&nbsp;" />
                            <span class="input-area-placeholder">Company name</span>
                        </Form.Item>

                        <Form.Item name="username" rules={[ { required: true, message: 'Please input your registartion number!' , }, ]}>
                            <Input placeholder="&nbsp;" type="number"/>
                            <span class="input-area-placeholder">Registration number</span>
                        </Form.Item>

                        <Form.Item name="username">
                        <Upload {...props} >
                            <Button>Attach a file</Button>
                            <span className='file-icon'>
                            <svg xmlns="http://www.w3.org/1999/svg" viewBox="0 0 14 13">
                                <g fill="#0074B6">
                                <path
                                    d="M14 3.809C14 4.38967 13.8889 4.95083 13.6667 5.4925C13.4444 6.03417 13.1363 6.50867 12.7421 6.916L7.10692 12.688L6.32704 11.895L11.9623 6.123C12.5828 5.499 12.8931 4.72767 12.8931 3.809C12.8931 3.03767 12.6478 2.3985 12.1572 1.8915C11.6667 1.3845 11.0482 1.131 10.3019 1.131C9.44654 1.131 8.69182 1.456 8.03774 2.106L1.83648 8.463C1.34172 8.97433 1.09434 9.55067 1.09434 10.192C1.09434 10.686 1.24948 11.0912 1.55975 11.4075C1.87002 11.7238 2.26415 11.882 2.74214 11.882C3.37107 11.882 3.93291 11.6263 4.42767 11.115L9.16981 6.279C9.61426 5.80233 9.83648 5.382 9.83648 5.018C9.83648 4.836 9.76939 4.693 9.63522 4.589C9.50105 4.485 9.34172 4.433 9.15723 4.433C8.75472 4.433 8.39413 4.60633 8.07547 4.953L3.79874 9.321L3.03145 8.528L7.2956 4.16C7.84906 3.588 8.4696 3.302 9.15723 3.302C9.64361 3.302 10.0629 3.46233 10.4151 3.783C10.7673 4.10367 10.9434 4.511 10.9434 5.005C10.9434 5.681 10.6122 6.37 9.94969 7.072L5.20755 11.908C4.50314 12.636 3.68134 13 2.74214 13C1.96226 13 1.31027 12.7335 0.786164 12.2005C0.262055 11.6675 0 10.998 0 10.192C0 9.23867 0.352201 8.398 1.0566 7.67L7.25786 1.313C8.12998 0.437667 9.14465 0 10.3019 0C11.3501 0 12.2285 0.364 12.9371 1.092C13.6457 1.82 14 2.72567 14 3.809Z"
                                    fill="#0074B6" />
                                </g>
                            </svg>
                            </span>
                        </Upload>
                        </Form.Item>
                    </div>
                </div>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
</div>
);
}

export default RegisterC;
