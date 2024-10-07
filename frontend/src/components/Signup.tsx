import React from 'react';


const SignUp = () => {


    return (
        <div>
            <div className="flex flex-wrap">
                <div className="flex w-full flex-col md:w-1/2">
                    <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
                        <a href="#" className="quicksand-bold pb-2 text-2xl font-bold text-gray-900"> YumHive </a>
                    </div>
                    <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
                        <p className="text-left text-3xl quicksand-regular">Welcome</p>
                        <p className="mt-2 text-left text-gray-500 quicksand-regular">please enter your details.</p>
                        <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent quicksand-bold hover:bg-black hover:text-white"><img className="mr-2 h-5 " src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt='img' /> Log in with Google</button>
                        <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
                            <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">or</div>
                        </div>
                        <form className="flex flex-col pt-3 md:pt-8">
                            <div className="flex flex-col pt-4">
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input type="email" id="login-email" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
                                </div>
                            </div>
                            <div className="mb-12 flex flex-col pt-4">
                                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                    <input type="password" id="login-password" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />
                                </div>
                            </div>
                            <button type="submit" className="w-full rounded-lg quicksand-regular bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">
                                Sign up

                            </button>
                        </form>
                        <div className="py-12 text-center">
                            <p className="whitespace-nowrap text-gray-600 quicksand-regular">
                                Already have an account?
                                <a href="#" className="underline-offset-4 font-semibold text-gray-900 underline quicksand-bold hover:text-sky-400"> Login </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pointer-events-none relative hidden h-screen select-none bg-white md:block md:w-1/2">
                    <div className="absolute bottom-0 z-10 px-44 text-white opacity-100">
                        <p className="mb-8 text-3xl font-semibold leading-10">We work 10x faster than our compeititors and stay consistant. While they're bogged won with techincal debt, we're realeasing new features.</p>
                        <p className="mb-4 text-3xl font-semibold quicksand-bold">YumHive</p>
                        <p className="">Founder, Emogue</p>
                        <p className="mb-7 text-sm opacity-70">Web Design Agency</p>
                    </div>
                    <img className="-z-1 absolute px-12 bg-white ml-12 top-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1532980400857-e8d9d275d858?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww" />
                </div>
            </div>

        </div>
    )
};

export default SignUp;