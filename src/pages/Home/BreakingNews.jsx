import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex p-4 pr-24 bg-[#F3F3F3]">
            <button className="bg-[#D72050] text-white px-6 py-2 text-xl font-medium mr-5">Latest</button>
            <Marquee pauseOnHover={true} speed={100} className="text-[#403F3F] font-semibold">
                <Link className="mr-10">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-10">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-10">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-10">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;