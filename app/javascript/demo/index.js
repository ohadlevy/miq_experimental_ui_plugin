import ExperimentalUi from '../demo/containers/Application';

window.MiqReact.componentRegistry.register({
  name: 'xui_plugin',
  type: ExperimentalUi,
});

// Another way to mount the component is via JS - e.g.
// ManageIQ.react.mount('xui_plugin', '#reactRoot');
