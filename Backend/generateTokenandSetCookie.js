import jwt from "jsonwebtoken"

export const generateTokenAndSetCookie = (_id,response) => {
    const token = jwt.sign({ _id }, process.env.JWT_SECRET, {
        expiresIn: '15d'

    });

    response.cookie("jwt", token)
}