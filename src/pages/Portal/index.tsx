import { useEffect, useMemo, useState } from 'react';
import Carousel from './components/PortalCarousel';
import ContentList from './components/ContentList';
import Recom from './components/Recom';
import styles from './index.less';
import { Button } from 'antd';

const PortalPage: React.FC<any> = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      <Carousel></Carousel>
      <div className={styles.root}>
        <ContentList></ContentList>
        <Recom></Recom>
      </div>
      {/*<Button onClick={() => setFlag(!flag)}>Press me</Button>*/}
    </div>
  );
};
export default PortalPage;
