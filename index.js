var Hapi = require('hapi');
var template = process.argv[2] || '';
var port = process.env.PORT || 3000;
var server = new Hapi.Server(port);

server.route([
  {
    method: 'POST',
    path: '/',
    config: {
      handler: function (request, reply) {
        var payload = request.payload || {};
        var text = payload.text || '';
        var matches = text.match(/(\d+)x(\d+)/) || [];
        var width = matches[1] || 250;
        var height = matches[2] || 250;
        var url = template.replace('{width}', width).replace('{height}', height);

        reply({
          text: '<' + url + '>',
          unfurl_links: true
        });
      }
    }
  }
]);

server.start();
