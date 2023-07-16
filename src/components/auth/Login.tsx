type LoginProps = {
    signIn: any
}

const Login = ({ signIn }: LoginProps) => {
    return (
        <div>
            <a
                className="cursor-pointer inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                onClick={() => signIn("github")}
            >
                <span
                    className="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
                >
                    Se connecter
                </span>
            </a>
        </div>
    )
};

export default Login;