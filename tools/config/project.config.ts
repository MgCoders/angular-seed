import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
      {src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs'},
      {src: 'bootstrap/dist/css/bootstrap.min.css', inject: true},
      {src: 'vis/dist/vis.min.js', inject: 'libs'},
      {src: 'vis/dist/vis.min.css', inject: true},
      {src:'ng2-dnd/bundles/style.css', inject: true},
      {src: '@angular/material/prebuilt-themes/purple-green.css', inject: true, vendor: false},
      // {src: '@angular/material/prebuilt-themes/indigo-pink.css', inject: true, vendor: false},
      {src: 'hammerjs/hammer.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}

    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // Add packages (e.g. ng2-translate)
    let additionalPackages: ExtendPackages[] = [{
       name: 'ng2-dnd',
    //   // Path to the package's bundle
       path: 'node_modules/ng2-dnd/bundles/index.umd.js'
    },
      {
        name: 'ng-sidebar',
        path: 'node_modules/ng-sidebar/lib/index.js'
      },
      {
        name: 'ngx-bootstrap',
        path: 'node_modules/ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js'
      },
      {
        name: 'ngx-bootstrap/*',
        path: 'node_modules/ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js'
      },
      {
        name:'@angular/material',
        path:'node_modules/@angular/material/bundles/material.umd.js'
      },
      {
        name: '@angular/flex-layout',
        path: 'node_modules/@angular/flex-layout/bundles/flex-layout.umd.js'
      }
    ];
    //
     this.addPackagesBundles(additionalPackages);

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
