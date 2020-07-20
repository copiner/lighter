import React,  { useState }  from 'react';
import { DatePicker, Input, message } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import dp from './date.css'

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const App = () => {
  const [date, setDate] = useState(null);

  const handleChange = value => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };
  return (
      <div className={dp.box}>
        <DatePicker onChange={handleChange} />
        <div className={dp.boxTop}>
          当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
        </div>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={value => console.log(value)}
        />
      </div>
  );
};

export default App;
