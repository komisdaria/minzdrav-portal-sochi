import { Calendar } from 'antd';
import styles from './calendar.module.css';
import moment from "moment";
import { CalendarMode } from 'antd/lib/calendar/generateCalendar';

export const CalendarForUser = () => {

  function onPanelChange(date: moment.Moment, mode: CalendarMode) {
    console.log(date, mode);
  }
  
  return (
    <div className={styles.calendar}>
    <Calendar fullscreen={false} 
    onPanelChange={onPanelChange}
    />
  </div>
  )
} 
