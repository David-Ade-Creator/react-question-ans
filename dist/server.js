"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = _interopRequireDefault(require("./config"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));

var _questionRoutes = _interopRequireDefault(require("./routes/questionRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const mongodbUrl = _config.default.MONGODB_URL;

_mongoose.default.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));

app.use(_bodyParser.default.json());
app.use("/api/users", _userRoutes.default);
app.use("/api/q3", _questionRoutes.default);

if (process.env.NODE_ENV === 'production') {
  app.use(_express.default.static(_path.default.join(__dirname, '/../que/build')));
  app.get('*', (req, res) => {
    res.sendFile(_path.default.join(`${__dirname}/../que/build/index.html`));
  });
}

app.listen(_config.default.PORT, () => {
  console.log(`server started at ${_config.default.PORT}`);
});