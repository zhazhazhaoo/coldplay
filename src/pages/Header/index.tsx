import { useEffect, useMemo, useState } from 'react';
import styles from './index.less';
import { Button, Input, Menu } from 'antd';
import { history } from 'umi';
import { ReconciliationOutlined } from '@ant-design/icons';

const { Search } = Input;
const PortalPage: React.FC<any> = (props) => {
  const { pathname = '/' } = history.location;
  const { query: { search = '' } } = history.location;
  const headerConfig = [
    {
      key: '/',
      name: '首页',
    },
    {
      key: '/Portal2',
      name: '分类1',
    },
    {
      key: '/search',
      name: '搜索',
    },
    {
      key: '/Portal4',
      name: '分类4',
    },
  ];
  const handleTabCut = (e) => {
    history.push(`${e.key}`);
  };
  const onSearch = val => {
    history.push(`/search?search=${val}`);
  };
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.logo}>
          COLDPLAY
        </div>
        <Menu onClick={e => handleTabCut(e)} selectedKeys={[pathname]} mode='horizontal'>
          {
            headerConfig.map(item => {
              const { name, key } = item;
              return <Menu.Item key={key}>{name}</Menu.Item>;
            })
          }
        </Menu>
      </div>
      <div className={styles.search}>
        <Search defaultValue={search} bordered={false} placeholder='请输入...' onSearch={onSearch} />
      </div>
    </div>
  );
};
export default PortalPage;
