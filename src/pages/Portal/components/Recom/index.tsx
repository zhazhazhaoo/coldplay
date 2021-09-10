import { useMemo } from 'react';
import { Carousel } from 'antd';
import styles from './index.less';
import { Card } from 'antd';

const { Meta } = Card;

const HomePage: React.FC<any> = (props) => {
  const contentStyle = {};
  const { dataSource = Array(10).fill('1') } = props;
  const list = new Array(9).fill('nice');
  return (
    <div className={styles.root}>
      herehereherehereherehereherehere
    </div>
  );
};
export default HomePage;
