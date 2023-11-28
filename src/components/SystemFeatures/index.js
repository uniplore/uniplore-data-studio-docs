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
        提供基于数据源管理之外的数据查询能力，支持简单数据查询、数据导出、自
        定义查询、用户操作日志审计、自定义查询存储、查询统计分析。
      </>
    ),
  },
  {
    title: '数据同步',
    Svg: require('@site/static/img/features/data_exchange.svg').default,
    description: (
      <>
        基于Flink提供数据同步能力，支持离线数据同步、实时数据同步，若拥有一定的能力可自
        行编写同步脚本，解决系统本身同步策略不足和满足用户更多个性化的需求。
      </>
    ),
  },
  {
    title: '数据标准',
    Svg: require('@site/static/img/features/data_standard.svg').default,
    description: (
      <>
        通过数据标准的管理功能，模型设计者可通过设计标准数据元素，定义关键业务对象、业
        务对象属性及值域，规范标准数据字典，制定并管理平台遵循的统一数据标准，帮助平台
        管理者和数据管理者管控治理后数据的一致性和数据质量。
      </>
    ),
  },
  {
    title: '数据建模',
    Svg: require('@site/static/img/features/data_model.svg').default,
    description: (
      <>
        数据建模支持ER模型和维度模型两种数据建模方法，帮助用户完
        成数据模型、逻辑表的设计和管理。用户可对数据模型的层次结构进行管理，并对逻辑表字段
        进行设计。字段设计需要在数据标准的约束下，通过模型设计过程中引用标准数据元定义，设
        置逻辑表相关标准质量规则，保证不同的逻辑表设计人员按照统一口径进行操作。
      </>
    ),
  },
  {
    title: '数据质量',
    Svg: require('@site/static/img/features/data_quality.svg').default,
    description: (
      <>
        数据质量即根据用户设置的数据质量规则执行面向不同计算资源的质量检查任务，包括运行质量
        检查计划和场景画布两种途径；通过数据质量监控报告，查看系统整体数据质量概览及多维度细
        分数据的质量情况。
      </>
    ),
  },
  {
    title: '数据服务',
    Svg: require('@site/static/img/features/data_api.svg').default,
    description: (
      <>
        在数据中台建设过程中，搭建核心处理平台，并根据相关标准要求，将源数据或治理后的数据，按
        照“全面、高效、统筹”的共享原则，“低延时”、“精准化”的传递给用户，方便更多应用消费数据，
        实现数据价值。协同管控各种组织机构，为智慧化运行提供支撑，实现跨层级、跨部门、跨行业、
        跨区域信息即时共享，做到高可靠、低延时。同时，数据被应用的使用情况评估也作为数据中台日常
        运营的重要指标项。提供更多数据生产需求，完成数据从生产、使用、到评估的闭环。
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
        运营主要面向租户资产管理员，为用户提供数据资产编目、上线、下线等能力。运营获取资产
        元数据信息，同步到数据资产目录完成数据资产注册。
      </>
    ),
  },
  {
    title: '数据资产中心',
    Svg: require('@site/static/img/features/data_assets_center.svg').default,
    description: (
      <>
        通过我的资产清晰掌握可使用、可管理、已授权的数据表和数据服务API数据资产相关信息。
      </>
    ),
  },
  {
    title: '画像分析',
    Svg: require('@site/static/img/features/data_portrait.svg').default,
    description: (
      <>
        基于数据标签和标签对象实现对数据的分析，解决部分简单场景下分析数据分析需求，为适当的决策
        提供有效的图表分析能力。
      </>
    ),
  },
  {
    title: '任务中心',
    Svg: require('@site/static/img/features/data_job_center.svg').default,
    description: (
      <>
        统一管理数据开发、数据同步中的调度管理，实现对调度任务的追踪、日志查看、重启、下线等能力。
      </>
    ),
  },
  {
    title: '数据血缘',
    Svg: require('@site/static/img/features/data_lineage.svg').default,
    description: (
      <>
        数据血缘是数据资产运营的重要功能，通过血缘关系，可以清晰了解数据资产的来龙去脉，便于数据资产
        的优化、管理、治理。
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
