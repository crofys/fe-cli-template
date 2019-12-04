import React from 'react';
import Styles from './404.css';
import router from 'umi/router';
const NoFoundPage: React.FC<{}> = () => {
  const goBack_clickHandler = (): void => {
    router.go(-1);
  }
  return (
    <main>
      <section className={Styles.section}>
        <img className={Styles.img} src={require('../assets/common/404.png')} alt="" />
        <p>页面加载错误, 程序猿正在努力抢修, 将尽快恢复 ！</p>
        <span onClick={goBack_clickHandler}>立即返回</span>
      </section>
    </main>
  );
};
export default NoFoundPage
