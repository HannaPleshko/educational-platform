import React from 'react';
import classNames from 'classnames';
import loader from './css/Loader.module.css';

const Loader = () => (
  <div className={classNames(loader['spinner'])}>
    <div className={classNames(loader['blob'], loader['top'])}></div>
    <div className={classNames(loader['blob'], loader['bottom'])}></div>
    <div className={classNames(loader['blob'], loader['left'])}></div>
    <div className={classNames(loader['blob'], loader['move-blob'])}></div>
  </div>
);

export default Loader;
