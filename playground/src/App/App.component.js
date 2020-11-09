import React from 'react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

import { playgroundConfigs } from '../playgroundConfigs';
import { useRouterControls } from '../useRouterControls';
import { getSandboxFileCode } from '../getSandboxFileCode';
import { getPackagesScope } from '../getPackagesScope';

function Component ({ classes }) {
  const { controls, changeControl } = useRouterControls();
  const onControlChange = name => event => changeControl(name, event.target.value);

  const packagesNames = playgroundConfigs.map(playground => playground.name);
  const packageConfig = playgroundConfigs.find(playground => playground.name === controls.packageName);

  let componentsNames = [];
  let componentConfig;
  if (packageConfig) {
    const { components } = packageConfig;
    componentsNames = components.map(component => component.name);
    componentConfig = components.find(component => component.name === controls.componentName);
  }

  let sandboxesNames = [];
  let sandboxConfig;
  if (componentConfig) {
    const { sandboxes } = componentConfig;
    sandboxesNames = sandboxes.map(sandbox => sandbox.name);
    sandboxConfig = sandboxes.find(sandbox => sandbox.name === controls.sandboxName);
  }

  return (
    <div className={classes.root}>

      <header className={classes.header}>
        <a className={classes.headerHeading} href='/'>
          <h1 className={classes.headerTitle}>Arwes Playground</h1>
        </a>
      </header>

      <div className={classes.body}>
        <aside className={classes.controls}>

          {/* PACKAGE NAME */}
          <select
            className={classes.select}
            value={controls.packageName}
            onChange={onControlChange('packageName')}
          >
            <option value=''>-- Select Package --</option>
            {packagesNames.map((packageName, index) => (
              <option key={index} value={packageName}>
                @arwes/{packageName}
              </option>
            ))}
          </select>

          {/* COMPONENT NAME */}
          <select
            className={classes.select}
            value={controls.componentName}
            onChange={onControlChange('componentName')}
          >
            <option value=''>-- Select Component --</option>
            {componentsNames.map((componentName, index) =>
              <option key={index} value={componentName}>
                {componentName}
              </option>
            )}
          </select>

          {/* SANDBOX NAME */}
          <select
            className={classes.select}
            value={controls.sandboxName}
            onChange={onControlChange('sandboxName')}
          >
            <option value=''>-- Select Sandbox --</option>
            {sandboxesNames.map((sandboxName, index) =>
              <option key={index} value={sandboxName}>{sandboxName}</option>
            )}
          </select>

        </aside>

        <main className={classes.content}>
          {!!sandboxConfig && (
            <LiveProvider
              code={getSandboxFileCode(sandboxConfig.code)}
              scope={getPackagesScope()}
              noInline
            >
              <LiveEditor />
              <LivePreview />
              <LiveError />
            </LiveProvider>
          )}
        </main>
      </div>

    </div>
  );
};

export { Component };
