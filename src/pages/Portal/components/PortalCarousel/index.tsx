import { useMemo } from 'react';
import { Carousel } from 'antd';
import styles from './index.less';


const HomePage: React.FC<any> = () => {
  const contentStyle = {

  };
  const list = new Array(9).fill('nice');
  return (
    <div className={styles.root}>
      <Carousel autoplay>
        {
          list.map((item,index)=>  <div>
            <h3 className={styles['carousel-img']}>{index+1}</h3>
          </div>)
        }
      </Carousel>
    </div>
  );
};
export default HomePage;
