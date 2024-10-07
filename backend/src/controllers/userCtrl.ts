import User from '../Model/userMdl'

export const signUp = async (req: any, res: any)  => {
    console.log("Enter so far")

    // const { username, email, password} = req.body

    try{
 
        const userName = 'Syam';
        const password = 'syamnandu@1234';

        const user = await User.insertMany({userName, password});


        res.json(' User Created Successfully!')

        


    }catch(err: any) {
        console.log(err)
    }
}

