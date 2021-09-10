import { useMemo } from 'react';
import { Layout, Modal } from 'antd';
import styles from './index.less';
import Head from '../Header';

const { Header, Footer, Sider, Content } = Layout;
const Page = (WrapperComponet) => {
    return function() {
      return <Layout className={styles.root}>
        <Head></Head>
        <Content className={styles.rootContent}>
          {/*{WrapperComponet()}*/}
            <WrapperComponet></WrapperComponet>
        </Content>
        <Footer>
          <div style={{ border: '1px solid' }}></div>
        </Footer>
      </Layout>;
    };
  }
export default Page;
