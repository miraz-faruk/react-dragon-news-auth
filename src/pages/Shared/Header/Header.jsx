import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img className='pb-5' src={logo} alt="" />
            <p className='text-lg text-[#706F6F] pb-[10px]'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'><span className='text-[#403F3F]'>{moment().format('dddd,')}</span><span className='text-[#706F6F]'>{moment().format(' MMMM D, YYYY')}</span></p>
        </div>
    );
};

export default Header;