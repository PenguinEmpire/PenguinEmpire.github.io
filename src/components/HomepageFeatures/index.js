import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn to code',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Our team uses a few different programming languages for different purposes. Find resources to learn C++, Python, Markdown and more.
      </>
    ),
  },
  {
    title: 'FRC and WPILib',
    Svg: require('@site/static/img/wpilibdocslogo.svg').default,
    description: (
      <>
        The WPI Robotics Library (WPILib) is the standard software library used for FRC. Learn how we use WPILib to create code for our robots.
      </>
    ),
  },
  {
    title: 'Advanced Topics',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We are learning about Computer Vision, Machine Learning and other advanced topics. Learn more here.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
