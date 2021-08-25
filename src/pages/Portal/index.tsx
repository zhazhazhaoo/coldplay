import { useEffect, useMemo, useState } from 'react';
import Carousel from './components/PortalCarousel';
import styles from './index.less';
import { Button } from 'antd';

const Text = ({ num=1 }) => {
  console.log(num);
  useEffect(() => {
    console.log('ffffff');
  }, []);
  return <div>this is A react Component</div>;
};

const HomePage: React.FC<any> = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      <Button onClick={() => setFlag(!flag)}>Press me</Button>
      {flag ? <Text num={1} /> : <Text num={2} />}
    </div>
  );
};
export default HomePage;
