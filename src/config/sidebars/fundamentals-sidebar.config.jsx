import DangerIcon from '../../ui/icons/danger.icon';
import BookIcon from '../../ui/icons/book.icon';
import PhoneIcon from '../../ui/icons/phone.icon';
import PersonIcon from '../../ui/icons/person.icon'
import FileRuledIcon from '../../ui/icons/file-ruled.icon';
import CalendarIcon from '../../ui/icons/calendar.icon';

export const FUNDAMENTALS_SIDEBAR = [
  {
    to='#',
    label: "Pubs",
    icon: <BookIcon />
  },
  {
    to='#',
    label: "Academic Training",
    icon: <PersonIcon />
  },
  {
    to='#',
    label: "7122 Form",
    icon: <FileRuledIcon />
  },
  {
    to='#',
    label: "Phone Roster",
    icon: <PhoneIcon />
  },
  {
    to='#',
    label: "Course Schedule",
    icon: <CalendarIcon />
  },
  {
    to='#',
    label: "Emergency Contact",
    icon: <DangerIcon />
  },
];