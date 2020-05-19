const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
//this extract header from passport-jwt
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Doctor = require('../model/Doctors');

let option = {

    //this extract jwt from header then token from passport-jwt
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    //this is decryption key using codeial
    secretOrKey: 'hospital'
}

passport.use(new JwtStrategy(option , function(jwtPayloads,done){

    User.findById(jwtPayloads._id,function(err,doctor){

        if(err){connsole.log('Error in finding doctor',err);return;}

        if(doctor){
            return done(null,doctor);
        }else{
            return done(null,false);
        }

    });

}));

module.exports = passport;