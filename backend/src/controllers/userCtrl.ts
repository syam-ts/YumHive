import User from "../Model/userMdl";

export const signUp = async (req: any, res: any) => {
  try {
    const { userName, email, password } = req.body;

    res.json(" User Created Successfully!");
  } catch (err: any) {
    console.log(err);
  }
};
