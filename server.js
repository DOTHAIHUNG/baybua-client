const express = require('express'),
  path = require('path');

const app = express();

app.use(express.static('./dist/dummy'));

app.get('/*')

