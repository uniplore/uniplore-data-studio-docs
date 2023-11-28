import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: '开发文档',
    naviUrl: "/docs/dev-docs/quick_start",
    Svg: require('@site/static/img/development.svg').default,
    description: (
      <>
        开发文档包含uniplore-data-studio一些常用封装类库、项目结构说明、拓展开发、功能分布模块及模块定义说明。
      </>
    ),
  },
  {
    title: '使用教程',
    naviUrl: '/docs/tutorial-docs/intro',
    Svg: require('@site/static/img/tutorial.svg').default,
    description: (
      <>
        包含系统功能如何使用，系统功能模块介绍，系统功能模块使用说明，系统功能模块使用示例截图等。
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
