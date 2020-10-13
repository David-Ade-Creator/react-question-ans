"use strict";

var _express = _interopRequireDefault(require("express"));

var _questionModel = _interopRequireDefault(require("../models/questionModel"));

var _answerModel = _interopRequireDefault(require("../models/answerModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get("/", async (req, res) => {
  const questions = await _questionModel.default.find({}).populate('whoasked');

  if (questions) {
    res.send(questions);
  } else {
    res.status(404).send("Unable to fetch questions");
  }
});
router.post("/", async (req, res) => {
  const newQuestion = new _questionModel.default({
    question: req.body.question,
    link: req.body.link,
    whoasked: req.body.whoaskedId
  });
  const newQuestionCreated = await newQuestion.save();

  if (newQuestionCreated) {
    res.send(newQuestionCreated);
  } else {
    res.status(404).send("Unable to fetch questions");
  }
});
router.get('/:id', async (req, res) => {
  const question = await _questionModel.default.findOne({
    _id: req.params.id
  }).populate('whoasked');

  if (question) {
    res.send(question);
  } else {
    res.status(404).send({
      message: 'Question Not Found.'
    });
  }
});
router.post('/answers', async (req, res) => {
  const {
    questionId,
    answer,
    writer,
    image
  } = req.body;
  const newanswer = new _answerModel.default({
    questionId,
    answer,
    writer,
    image
  });
  newanswer.save((err, answer) => {
    if (err) {
      return res.status(401).json({
        errors: 'Unable so submit this answer'
      });
    } else {
      return res.json({
        message: 'Answer has been submitted'
      });
    }
  });
});
router.get('/:id/answers', async (req, res) => {
  const answer = await _answerModel.default.find({
    questionId: req.params.id
  }).populate('writer');

  if (answer) {
    res.send(answer);
  } else {
    res.status(404).send({
      message: 'Answer Not Found.'
    });
  }
});
module.exports = router;