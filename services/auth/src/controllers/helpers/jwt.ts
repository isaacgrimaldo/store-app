import jwt from "jsonwebtoken";
import { getEnvVariable } from "../../helpers";

const secret = getEnvVariable("WORD_SECRET");

interface Info {
    name: string,
    user_id: string
}

const generateJWT = (info: Info) => {
    return new Promise((resolve, reject) => {
        const payload = info;
        jwt.sign(payload, secret, {
            expiresIn: "30m"
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
};

export default generateJWT;