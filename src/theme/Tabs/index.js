import React, {cloneElement} from 'react';
import clsx from 'clsx';
import {
  useScrollPositionBlocker,
  useTabs,
} from '@docusaurus/theme-common/internal';
import useIsBrowser from '@docusaurus/useIsBrowser';
import styles from './styles.module.css';

// Custom function adapted from Temporal documentation
// Copyright (c) 2022 Temporal Technologies Inc. All rights reserved.
// Copyright (c) 2017 Uber Technologies, Inc.
function updateTabLink(val,topic) {
  const url = window.location.href;
  const parts = url.split("#");
  if (topic == undefined) {
    history.replaceState({}, "", `?tab=${val}`);
  }
  else {
  history.replaceState({}, "", `?tab=${val}#${topic}`);
  }
}
//End customization

function TabList({className, block, selectedValue, selectValue, tabValues, groupId}) {
  const tabRefs = [];
  const {blockElementScrollPositionUntilNextRender} =
    useScrollPositionBlocker();
  const handleTabChange = (event) => {
    const newTab = event.currentTarget;
    const newTabIndex = tabRefs.indexOf(newTab);
    const newTabValue = tabValues[newTabIndex].value;
    updateTabLink(newTabValue, groupId);

    if (newTabValue !== selectedValue) {
      blockElementScrollPositionUntilNextRender(newTab);
      selectValue(newTabValue);
    }
  };
  const handleKeydown = (event) => {
    let focusElement = null;
    switch (event.key) {
      case 'Enter': {
        handleTabChange(event);
        break;
      }
      case 'ArrowRight': {
        const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
        focusElement = tabRefs[nextTab] ?? tabRefs[0];
        break;
      }
      case 'ArrowLeft': {
        const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
        focusElement = tabRefs[prevTab] ?? tabRefs[tabRefs.length - 1];
        break;
      }
      default:
        break;
    }
    focusElement?.focus();
  };
  return (
    <ul
      role="tablist"
      aria-orientation="horizontal"
      className={clsx(
        'tabs',
        {
          'tabs--block': block,
        },
        className,
      )}>
      {tabValues.map(({value, label, attributes}) => (
        <li
          // TODO extract TabListItem
          role="tab"
          tabIndex={selectedValue === value ? 0 : -1}
          aria-selected={selectedValue === value}
          key={value}
          ref={(tabControl) => tabRefs.push(tabControl)}
          onKeyDown={handleKeydown}
          onClick={handleTabChange}
          {...attributes}
          className={clsx('tabs__item', styles.tabItem, attributes?.className, {
            'tabs__item--active': selectedValue === value,
          })}>
          {label ?? value}
        </li>
      ))}
    </ul>
  );
}
function TabContent({lazy, children, selectedValue}) {
  // eslint-disable-next-line no-param-reassign
  children = Array.isArray(children) ? children : [children];
  if (lazy) {
    const selectedTabItem = children.find(
      (tabItem) => tabItem.props.value === selectedValue,
    );
    if (!selectedTabItem) {
      // fail-safe or fail-fast? not sure what's best here
      return null;
    }
    return cloneElement(selectedTabItem, {className: 'margin-top--md'});
  }
  return (
    <div className="margin-top--md">
      {children.map((tabItem, i) =>
        cloneElement(tabItem, {
          key: i,
          hidden: tabItem.props.value !== selectedValue,
        }),
      )}
    </div>
  );
}
function TabsComponent(props) {
  const tabs = useTabs(props);
  return (
    <div className={clsx('tabs-container', styles.tabList)}>
      <TabList {...props} {...tabs} />
      <TabContent {...props} {...tabs} />
    </div>
  );
}
export default function Tabs(props) {
  const isBrowser = useIsBrowser();
  return (
    <TabsComponent
      // Remount tabs after hydration
      // Temporary fix for https://github.com/facebook/docusaurus/issues/5653
      key={String(isBrowser)}
      {...props}
    />
  );
}