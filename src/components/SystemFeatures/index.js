import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: '数据查询',
    href: "/docs/intro",
    Svg: require('@site/static/img/features/data_query.svg').default,
    description: (
      <>
        iDIS是一个以数据分析为核心的产品，包含有UDI，VA，DM和OLAP。
        UDI是一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据;
        UDI是一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据;
        UDI是一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据;
        UDI是一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据;
        UDI是一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据;
        UDI是一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据;
        UDI是一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据;
        UDI是一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据;
        UDI是一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据;
      </>
    ),
  },
  {
    title: '数据同步',
    Svg: require('@site/static/img/features/data_exchange.svg').default,
    description: (
      <>
        Labplore是基于iDIS的教育版，功能涵盖范围与iDIS略有差异，也包含了如下功能：
        UDI（一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据）、
      </>
    ),
  },
  {
    title: '数据标准',
    Svg: require('@site/static/img/features/data_standard.svg').default,
    description: (
      <>
        Labplore是基于iDIS的教育版，功能涵盖范围与iDIS略有差异，也包含了如下功能：
        UDI（一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据）
      </>
    ),
  },
  {
    title: '数据建模',
    Svg: require('@site/static/img/features/data_model.svg').default,
    description: (
      <>
        Labplore是基于iDIS的教育版，功能涵盖范围与iDIS略有差异，也包含了如下功能：
        UDI（一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据）
      </>
    ),
  },
  {
    title: '数据质量',
    Svg: require('@site/static/img/features/data_quality.svg').default,
    description: (
      <>
        Labplore是基于iDIS的教育版，功能涵盖范围与iDIS略有差异，也包含了如下功能：
        UDI（一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据）
      </>
    ),
  },
  {
    title: '数据服务',
    Svg: require('@site/static/img/features/data_api.svg').default,
    description: (
      <>
        Labplore是基于iDIS的教育版，功能涵盖范围与iDIS略有差异，也包含了如下功能：
        UDI（一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据）
      </>
    ),
  },
  {
    title: '数据标签',
    Svg: require('@site/static/img/features/data_tag.svg').default,
    description: (
      <>
        Labplore是基于iDIS的教育版，功能涵盖范围与iDIS略有差异，也包含了如下功能：
        UDI（一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据）
      </>
    ),
  },
  {
    title: '数据资产运营',
    Svg: require('@site/static/img/features/data_assets_operation.svg').default,
    description: (
      <>
        Labplore是基于iDIS的教育版，功能涵盖范围与iDIS略有差异，也包含了如下功能：
        UDI（一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据）
      </>
    ),
  },
  {
    title: '数据资产中心',
    Svg: require('@site/static/img/features/data_assets_center.svg').default,
    description: (
      <>
        Labplore是基于iDIS的教育版，功能涵盖范围与iDIS略有差异，也包含了如下功能：
        UDI（一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据）
      </>
    ),
  },
  {
    title: '画像分析',
    Svg: require('@site/static/img/features/data_portrait.svg').default,
    description: (
      <>
        Labplore是基于iDIS的教育版，功能涵盖范围与iDIS略有差异，也包含了如下功能：
        UDI（一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据）
      </>
    ),
  },
  {
    title: '任务中心',
    Svg: require('@site/static/img/features/data_job_center.svg').default,
    description: (
      <>
        Labplore是基于iDIS的教育版，功能涵盖范围与iDIS略有差异，也包含了如下功能：
        UDI（一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据）
      </>
    ),
  },
  {
    title: '数据血缘',
    Svg: require('@site/static/img/features/data_lineage.svg').default,
    description: (
      <>
        Labplore是基于iDIS的教育版，功能涵盖范围与iDIS略有差异，也包含了如下功能：
        UDI（一款高效稳定的ETL工具，帮助用户整合业务系统中分散，零乱，标准不统一的数据）
      </>
    ),
  },
];

function Feature({Svg, href, title, description}) {
  return (
    <div className={`${clsx('col col--4')} ${styles.containerWrapper}`}>
      <div className={styles.itemWrapper}>
        <div className={`text--center ${styles.shadow}`}>
          <Svg className={styles.featureImg} role="img" />
        </div>
        <div className={`text--center padding-horiz--md ${styles.textShadow}`}>
          <h3>
            {title}
          </h3>
          <p className={styles.content} style={{textAlign: 'left'}}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SystemFeatures() {
  return (
    <section className={styles.systemFeatures}>
      <div className={`container`}>
        <h1 className={`${styles.title} text--center`}>功能特性</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
