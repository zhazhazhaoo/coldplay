import { useMemo } from 'react';
import { Layout } from 'antd';
import styles from './index.less';
import Portal from './Portal';
const { Header, Footer, Sider, Content } = Layout;

const HomePage: React.FC<any> = () => {
  return (
    <Layout className={styles.root}>
      <Header>

      </Header>
      <Content className={styles.rootContent}>
        <Portal></Portal>
      </Content>
      {/*<Footer>Footer</Footer>*/}
    </Layout>
  );
};
export default HomePage;
