import User from '../Model/userModel'

export const signIn = async (req: any)  => {

    try{

        const { id } = req.body;

        const user = await User.findOne({username: req.body.username})

        if(user) {
            
        }


    }catch(err: any) {
        console.log(err)
    }
}