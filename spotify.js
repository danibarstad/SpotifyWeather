const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(
    new SpotifyStrategy(
        {
            clientID: process.env.SPOTIFY_KEY,
            clientSecret: process.env.SPOTIFY_SECRET,
            callbackURL: process.env.SPOTIFY_REDIRECT
        },
        function(accessToken, refreshToken, expires_in, profile, done) {
            User.findOrCreate({ spotifyID: profile.id }, function(err, user) {
                return done(err, user);
            });
        }
    )
);