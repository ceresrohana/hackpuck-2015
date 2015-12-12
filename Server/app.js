var express = require('express');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.route('/')
  .get(function(req, res) {

    });
  })
  .post(function(req, res) {

    });
  });

app.listen(3000, function() {
  console.log('Rodando...');
});
