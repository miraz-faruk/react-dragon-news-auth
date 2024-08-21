import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div className="p-4">
            {/* Login with */}
            <div className="mb-8">
                <h2 className="text-xl text-[#403F3F] font-semibold mb-5">Login With</h2>
                <button className="btn btn-outline btn-info w-full mb-3">
                    <FcGoogle></FcGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            {/* Find us on */}
            <div className="mb-5">
                <h2 className="text-xl text-[#403F3F] font-semibold mb-5">Find Us On</h2>
                <div className="font-medium text-[#706F6F]">
                    <a className="flex items-center gap-3 p-4 border border-t rounded-t-md" href=""><span className="bg-[#F3F3F3] rounded-full p-3"><FaFacebookF className="text-[#3B599C]"></FaFacebookF></span><span>Facebook</span></a>
                    <a className="flex items-center gap-3 p-4 border-x" href=""><span className="bg-[#F3F3F3] rounded-full p-3"><FaTwitter className="text-[#58A7DE]"></FaTwitter></span><span>Twitter</span></a>
                    <a className="flex items-center gap-3 p-4 border border-t rounded-t-md" href=""><span className="bg-[#F3F3F3] rounded-full p-3"><FaInstagram className="text-[#D82D7E] to-[#FBA756]"></FaInstagram></span><span>Instagram</span></a>
                </div>
            </div>
            {/* Q-Zone */}
            <div className="bg-[#F3F3F3] py-4 px-1">
                <h2 className="text-xl text-[#403F3F] font-semibold mb-5">Q-Zone</h2>
                <div>
                    <img className="mb-5" src={qzone1} alt="" />
                    <img className="mb-5" src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;