
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    
    return (
        <header clasaName='my-20'
        style={{
            background:`url(${bg})`,
            backgroundSize: 'cover'
        }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                    <div className='mr-8'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;