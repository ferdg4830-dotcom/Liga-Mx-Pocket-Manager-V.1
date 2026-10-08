
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-websocket-server.WebSocketServer",
          "file": "plugins/cordova-plugin-websocket-server/www/wsserver.js",
          "pluginId": "cordova-plugin-websocket-server",
        "clobbers": [
          "cordova.plugins.wsserver"
        ]
        },
      {
          "id": "cordova-plugin-zeroconf.ZeroConf",
          "file": "plugins/cordova-plugin-zeroconf/www/zeroconf.js",
          "pluginId": "cordova-plugin-zeroconf",
        "clobbers": [
          "cordova.plugins.zeroconf"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-websocket-server": "1.6.0",
      "cordova-plugin-zeroconf": "1.4.2"
    };
    // BOTTOM OF METADATA
    });
    