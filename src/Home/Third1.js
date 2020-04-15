
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu,  Icon, Button, Popover, Badge } from 'antd';
import Header from './Header';
import React, { Component } from 'react';
import  { useState } from 'react';
import "antd/dist/antd.css";

import firebase from './Firebase';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Tag,
  Select,
  Row,
  Col,
  Option,InputNumber,
  Checkbox,

  AutoComplete,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const AutoCompleteOption = AutoComplete.Option;

const Third = ({ setForm, formData, navigation }) => {
const {
    title,
  zip,
  address,
  description,
  supply,
  phone,
  email
} = formData;

     this.ref = firebase.firestore().collection('requests');







      const   handleSubmit = (e) => {

          alert('ldld');
            e.preventDefault();

            const { title, email, address, lat ,author, long , zip ,description, supply } = formData;

            this.ref.add({
              title,
              description,
              author,
              address,
              zip,
              email,
              supply,

            }).then((docRef) => {
              this.setState({
                title: '',
                description: '',
                author: '',
                supply:'',
                zip:'',
                emailL:''
              });
              this.props.history.push("/")
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
          }

const { Option } = Select;
const options = [{ value: 'Gloves' }, { value: 'Masks' }, { value: 'Food' }, { value: 'Respirator' }]

function tagRender(props) {
  const { label, value, closable, onClose } = props;

  return (
    <Tag  closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
      {label}
    </Tag>
  );
}


 return(

  <div>

  <Form

       layout="horizontal"

         onSubmit={this.handleSubmit}

      >

        <Form.Item label="Email">
          <Input placeholder="input placeholder" style={{width:"25%"}}
           value={email}
        onChange={setForm}
             />
        </Form.Item>

        <Form.Item >
          <Button htmlType="submit" type="primary">Submit</Button>
        </Form.Item>
      </Form>
  </div>



);
};



export default Third;
