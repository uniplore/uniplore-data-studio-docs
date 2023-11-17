import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: '系统开发文档',
    href: "/docs/intro",
    Svg: require('@site/static/img/idis.svg').default,
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
    title: '系统使用教程',
    Svg: require('@site/static/img/labplore.svg').default,
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

function Feature({Svg, href, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <a href={href} className={styles.normalA}>
        <div className={`text--center ${styles.shadow}`}>
          <Svg className={styles.featureSvg} role="img" style={{width: '350px', height: '350px'}}/>
        </div>
        <div className={`text--center padding-horiz--md ${styles.textShadow}`}>
          {/* 数据中台多源异构的数据采集、治理、建模、分析，应用，使数据对内优化管理提高业务，对外可以数据合作价值释放，成为企业数据资产管理中枢。数据中台是一套可持续“让企业的数据用起来”的机制，一种战略选择和组织形式，是依据企业特有的业务模式和组织架构，通过有形的产品和实施方法论支撑，构建一套持续不断把数据变成资产并服务于业务的机制。数据中台建立后，会形成数据API，为企业和客户提供高效各种数据服务。 */}
          {/* <h3>
            <Translate id="homepage.feature.{title}">{title}</Translate>
          </h3>
          <p>
            <Translate id="homepage.feature.{description}">{description}</Translate>
          </p> */}
          <h3>
            {title}
          </h3>
          <p style={{textAlign: 'left'}}>
            {description}
          </p>
        </div>
      </a>
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
