const router = require('express').Router();

const {
  getThoughtById,
  getThoughts,
  newThought,
  removeThought,
  updateThought,
  removeReaction,
  createReaction
} = require('../../controllers/thought-controller');


router.route('/').get(getThoughts).post(newThought);


router.route('/:id').get(getThoughtById).put(updateThought).delete(removeThought);

router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;