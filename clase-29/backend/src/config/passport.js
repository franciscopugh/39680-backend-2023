import passport from 'passport'
import { strategyJWT } from './Strategies/jwtStrategy.js'

const initializePassport = () => {
    passport.use(strategyJWT)
}

export default initializePassport