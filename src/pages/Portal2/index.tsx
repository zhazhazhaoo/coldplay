import { useEffect, useMemo, useState } from 'react';
import Carousel from './components/PortalCarousel';
import styles from './index.less';
import { Button, Layout } from 'antd';
import Head from '@/pages/Header';
import Portal from '@/pages/Portal';
import Page from '@/pages/commonHOC/Page';

const PortalPage: React.FC<any> = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div className={styles.root}>
      <div>===============</div>
      <div>===============</div>
      <div>===============</div>
      <div>===============</div>
      <div>===============</div>
      <div>===============</div>

    </div>
  );
};
export default Page(PortalPage);
