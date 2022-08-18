import React, {useEffect, useState} from 'react';
import { Comment, Form, Button, Input, message} from 'antd';
import { getProfileUser } from '@/API/user';
import { postComment } from '@/API/product';

import "./Comment.css"
const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
    <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
      Gửi bình luận
    </Button>
    </Form.Item>
  </>
);

export default function EditComment({productID, fetch, userData}) {
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    
    const handleSubmit = async () => {
      if (userData){
        if (!value) {
        return;
        }
        setSubmitting(false);
        try {
            await postComment({productId: productID, content: value});
            setValue('');
            fetch();
        } catch (err) {
          console.log(err)
        }
      }
      else{
        message.error("Vui lòng đăng nhập để thực hiện chức năng!");
      }
    };

    const handleChange = e => {
        setValue(e.target.value);
    };

    return (
        <>
            <Comment
            content={
                <Editor
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitting={submitting}
                value={value}
                />
            }
            />
        </>
        );
    
}