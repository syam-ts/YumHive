import User from '../Model/userModel'

export const signUp = async (req: any, res: any)  => {
    console.log("Enter so far")

    const { username, email, password} = req.body

    try{
 
        res.json('Succesfully created new user!')

        // const user = await User.findOne({username: req.body.username})

        // if(user) {
            
        // }


    }catch(err: any) {
        console.log(err)
    }
}

