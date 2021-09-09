import { Calendar } from 'antd';
import styles from './calendar.module.css';


export const CalendarForUser = () => {

  // function onPanelChange(value, mode) {
  //   console.log(value, mode);
  // }

  // value?: DateType;
  // defaultValue?: DateType;
  // mode?: CalendarMode;
  // fullscreen?: boolean;
  // onChange?: (date: DateType) => void;
  // onPanelChange?: (date: DateType, mode: CalendarMode) => void;
  
  return (
    <div className={styles.calendar}>
    <Calendar fullscreen={false} 
    // onPanelChange={onPanelChange}
    />
  </div>
  )
} 
