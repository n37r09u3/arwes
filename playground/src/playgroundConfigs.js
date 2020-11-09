const playgroundConfigs = [
  {
    name: 'sounds',
    components: [
      {
        name: 'withSounds',
        sandboxes: [
          {
            name: 'basic',
            code: require('../../packages/sounds/src/withSounds/basic.sandbox.md').default
          }
        ]
      }
    ]
  },
  {
    name: 'animation',
    components: [
      {
        name: 'withEnergy',
        sandboxes: [
          {
            name: 'basic',
            code: require('../../packages/animation/src/withEnergy/basic.sandbox.md').default
          }
        ]
      },
      {
        name: 'Stream',
        sandboxes: [
          {
            name: 'basic',
            code: require('../../packages/animation/src/Stream/basic.sandbox.md').default
          }
        ]
      }
    ]
  }
];

export { playgroundConfigs };
