import { useMemo } from 'react';
import { Layout, Modal } from 'antd';
import styles from './index.less';
import Portal from './Portal';
import Head from './Header';
import { history } from '@@/core/history';
import Page from '@/pages/commonHOC/Page';

const { Header, Footer, Sider, Content } = Layout;

const HomePage: React.FC<any> = () => {
  return (
    <Portal></Portal>
  );
};
export default Page(HomePage);
