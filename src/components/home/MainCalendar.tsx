import Calendar from 'react-calendar';
import SlotListCalendar from './SlotListCalendar';
import isDateBlocked from '@/functions/home/isDateBlocked';
import { CalendarConfig } from '@/lib/calendar.config';
import { useAppSelector } from '@/states/store';
import { useDispatch } from 'react-redux';
import { setSelectService } from '@/states/home/slices/selectServiceSlice';
import { setSelectedSlot } from '@/states/home/slices/selectedSlotSlice';

function MainCalendar() {

    const dispatch = useDispatch();

    const { selectedService } = useAppSelector(state => state.combineHomeReducers);
    const { periods, selectedSlot } = useAppSelector(state => state.combineHomeReducers);

    return (
        <div>
            <div>Prestation sélectionné: <b className='text-2xl text-red-500 ml-4'>{selectedService?.name} à {selectedService?.price} €</b></div>
            {selectedSlot ?
                <div>
                    <SlotListCalendar />
                    <div className='cursor-pointer m-2' onClick={() => dispatch(setSelectedSlot(null))}>Back</div>
                </div>
                :
                <Calendar tileDisabled={(date) => isDateBlocked(date.date, periods)} minDate={CalendarConfig.minDate} maxDate={CalendarConfig.maxDate} onClickDay={(date) => dispatch(setSelectedSlot(date))} locale='fr-FR' />
            }
            <div className='cursor-pointer m-2' onClick={() => dispatch(dispatch(setSelectService(null)))}>Reset</div>
        </div>
    );
}

export default MainCalendar;