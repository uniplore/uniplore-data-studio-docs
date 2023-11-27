import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: '开发文档',
    naviUrl: "/docs/dev-docs/intro",
    Svg: require('@site/static/img/development.svg').default,
    description: (
      <>
        iDIS是一个以数据分析为核心的产品，包含有UDI，VA，DM和OLAP。
        UDI是一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据;
        VA是一款数据可视化分析工具，拥有30余种图表类型，帮助用户可以从多个角度洞悉数据的价值;
        DM是一款基于Web的数据挖掘工作流平台，具有实时分析的功能，助力用户数据淘金;
        OLAP是一款全OLAP特性的数据分析应用，支持拖拽式复杂多维分析，帮助用户从维度解析数据。
      </>
    ),
  },
  {
    title: '使用教程',
    naviUrl: '/docs/tutorial-docs/intro',
    Svg: require('@site/static/img/tutorial.svg').default,
    description: (
      <>
        Labplore是基于iDIS的教育版，功能涵盖范围与iDIS略有差异，也包含了如下功能：
        UDI（一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据）、
        VA（一款数据可视化分析工具，拥有30余种图表类型，帮助用户可以从多个角度洞悉数据的价值）、
        DM（一款基于Web的数据挖掘工作流平台，具有实时分析的功能，助力用户数据淘金）、
        OLAP（一款全OLAP特性的数据分析应用，支持拖拽式复杂多维分析，帮助用户从维度解析数据）。
      </>
    ),
  },
];

function Feature({Svg, naviUrl, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className={`text--center ${styles.shadow}`}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={`text--center padding-horiz--md ${styles.textShadow}`}>
        <h3>
          {title}
        </h3>
        <p style={{textAlign: 'left'}}>
          {description}
        </p>
        <a href={naviUrl} className='button button--primary'>
          查看文档→
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
