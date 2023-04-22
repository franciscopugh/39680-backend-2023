import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { createUser, findUserById } from '../../services/UserServices.js'

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

export const strategyJWT = new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
        console.log(payload)
        const user = await findUserById(payload._id)

        if (!user) {
            return done(null, false)
        }

        return done(null, user)

    } catch (error) {
        return done(error, false)
    }
})
