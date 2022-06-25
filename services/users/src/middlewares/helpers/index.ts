import User from "../../db/models/Users";

export const checkName = async (name: string) => {
    const check = await User.findOne({ where: { name } });
    if (check) { throw new Error(`the name ${name} already used for other user`); }

};