import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Super Fast',
    Img: require('@site/static/img/rocket.svg').default,
    description: (
      <>
        Farm's compiler is written in Rust, with multi-threading, lazy/asynchronous compilation and persist caching, Farm can start a project in milliseconds, perform a HMR update within 10ms for most scenarios.
      </>
    ),
  },
  {
    title: 'Rich Features',
    Img: require('@site/static/img/toolbox.svg').default,
    description: (
      <>
        Farm support compiling Html, Css, Js/Jsx/Ts/Tsx, Json, Static Assets out of box, support sass, less, react-refresh by official plugins, support lazy compiling, partial bundling and more
      </>
    ),
  },
  {
    title: 'Fully Pluggable',
    Img: require('@site/static/img/plug.svg').default,
    description: (
      <>
        Everything inside Farm is powered by plugins, you can achieve anything you want by writing a plugin. Support both Rust and Js plugins.
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Img className={styles.featureSvg} role="img" />
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
