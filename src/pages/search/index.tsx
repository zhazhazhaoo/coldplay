import { useEffect, useMemo, useState } from 'react';
import Carousel from './components/PortalCarousel';
import styles from './index.less';
import { Button, Layout } from 'antd';
import Head from '@/pages/Header';
import Portal from '@/pages/Portal';
import { history } from '@@/core/history';
import Page from '@/pages/commonHOC/Page';

const PortalPage: React.FC<any> =  () => {
  const { query: { search = '' } } = history.location;
  return (
    <div className={styles.root}>
      <div>===============</div>
      <div>===============</div>
      <div>===============</div>
      <div>======={search}========</div>
      <div>===============</div>
      <div>===============</div>
    </div>
  );
};
export default Page(PortalPage);
