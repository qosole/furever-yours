const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = 3 * 24 * 60 * 60; // 3 days in seconds


module.exports = {
  authMiddleware: function ({ req }) {
    // this allows the tokens to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // We're splitting the token string into an array and return actual token
    if (!token) {
      return req;
    }
    // if token can be verified, then add the decoded user's data to the request that way it can be accessed in the resolver
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Token is invalid ');
    }
    // return the request object so it can be passed to the resolver as `context`
    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };

    const token = jwt.sign({ _id }, secret, { expiresIn: expiration });

    return {
      token,
      expiration
    };
  },
};
