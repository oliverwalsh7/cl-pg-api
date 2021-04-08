//or native libpq bindings
//var pg = require('pg').native

var pg = require('pg');

var conString = "postgres://ujbgxlwy:Seo5GSBlI3W7rZdgOPems-QTC6kZ9IbN@ziggy.db.elephantsql.com:5432/ujbgxlwy" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM linktopia', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    client.end();
  });
});