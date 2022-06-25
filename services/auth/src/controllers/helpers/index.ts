import { compareSync } from "bcrypt";
import User from "../../db/models/User";
import { User as Model } from "../../interface";

export const checkPassword = (value: string, password: string): boolean => {
    return compareSync(value, password);
};

export const getUser = async (name: string): Promise<Model | boolean> => {
    const valid = await User.findOne({ where: { name } });

    if (!valid) {
        return false;
    }
    const data = valid.toJSON();
    const user: Model = {
        name: data.name,
        user_id: data.user_id,
        password: data.password
    };
    return user;
};