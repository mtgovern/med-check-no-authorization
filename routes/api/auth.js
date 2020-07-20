const express = require('express');

const router = express.Router();
const passport = require('passport');
const db = require('../../models/user');

// router.post('/register_login', (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     if (err) {
//       return res.status(400).json({ errors: err });
//     }
//     if (!user) {
//       return res.status(400).json({ errors: 'No user found' });
//     }
//     req.logIn(user, (err) => {
//       if (err) {
//         return res.status(400).json({ errors: err });
//       }
//       return res.status(200).json({ success: `logged in ${user.id}` });
//     });
//   })(req, res, next);
// });

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.user);
});

// Route for signing up a user.
// The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model.
// If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post('/api/signup', (req, res) => {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then(() => {
      res.redirect(307, '/api/login');
    })
    .catch((err) => {
      res.status(401).json(err);
    });
});

// Route for logging user out
router.get('/logout', (req, res) => {
  req.logout();
  res.json(req.user);
  // res.redirect('/');
});

router.get('/user_data', (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.password,
    });
  }
});

module.exports = router;
