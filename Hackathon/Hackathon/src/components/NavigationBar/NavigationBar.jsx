import { use, useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { CiMoneyBill } from "react-icons/ci";
import { ImEnter } from "react-icons/im";
import { PiExam } from "react-icons/pi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function NavigationBar() {

  const navigate = useNavigate();
  const navItems = [
    {
      label: "Branches",
      icon: <PiStudent style={{ width: '24px', height: '24px' }} />,
      nested: [["Branches Registration", <IoMdAddCircleOutline style={{ width: '24px', height: '24px' }} />], ["Branches List", <CiBoxList style={{ width: '24px', height: '24px' }} />]]
    },
    {
      label: "Products",
      icon: <FaChalkboardTeacher style={{ width: '24px', height: '24px' }} />,
      nested: [["Manage Products ", <IoMdAddCircleOutline style={{ width: '24px', height: '24px' }} />], ["Products List", <CiBoxList style={{ width: '24px', height: '24px' }} />]]
    },
    {
      label: "Subjects",
      icon: <MdOutlineSubject style={{ width: '24px', height: '24px' }} />,
      nested: [["Subject Add", <IoMdAddCircleOutline style={{ width: '24px', height: '24px' }} />], ["Subject List", <CiBoxList style={{ width: '24px', height: '24px' }} />]]
    },
    {
      label: "Syllabus",
      icon: <MdDateRange style={{ width: '24px', height: '24px' }} />,
      nested: [["Syllabus Form", <FaWpforms style={{ width: '24px', height: '24px' }} />], ["Syllabus List", <CiBoxList style={{ width: '24px', height: '24px' }} />]]
    },
 
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <Paper elevation={3} sx={{ width: '100%', height: '100vh' }}>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader sx={{ fontSize: '1.25rem', fontWeight: 'bold', textAlign: 'center' }} component="div" id="nested-list-subheader">
            Navigation Menu
          </ListSubheader>
        }
      >
        {navItems.map((item, idx) => (
          <div key={idx}>
            <ListItemButton onClick={() => handleClick(idx)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
              {openIndex === idx ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            {item.nested.map((e, i) => (
              <Collapse key={i} in={openIndex === idx} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton onClick={() => navigate(`/${e[0].toLowerCase().replace(" ", "-")}`)} sx={{ pl: 4 }}>
                    <ListItemIcon>{e[1]}</ListItemIcon>
                    <ListItemText primary={e[0]} />
                  </ListItemButton>
                </List>
              </Collapse>
            ))}
          </div>
        ))}
      </List>
    </Paper>
  );
}
