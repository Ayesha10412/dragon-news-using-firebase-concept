import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3 text-xl ">Login with</h2>

<div className="flex flex-col gap-2 *:w-full ">
    <button className="btn "><FaGoogle></FaGoogle>Login with Google </button>
    <button className="btn"><FaGithub></FaGithub>Login with Github </button>
    </div>
        </div>
    );
};

export default SocialLogin;