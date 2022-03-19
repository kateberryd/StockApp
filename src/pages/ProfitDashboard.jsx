
import 'bootstrap/dist/css/bootstrap.min.css';

import {React, useEffect, useState} from 'react';
import CoolDog from '../assets/cool-dog.jpg'; 
import Gift from '../assets/gift-box.svg';
import { BiSearch } from 'react-icons/bi';
import { FaRegBell } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';

import './css/ProfitDashboard.css';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector, useDispatch } from 'react-redux';
import profileReducer from  '../redux/profile/profileSlice';
import categoriesReducer from  '../redux/category/categorySlice';


import Dropdown from 'react-bootstrap/Dropdown';


import DropdownButton from 'react-bootstrap/DropdownButton';

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import {  tradedata, filteredTrade, } from '../redux/trade/trade';

import {  categoriesdata } from '../redux/category/category';

import { useForm } from 'react-hook-form';

import DatePicker from 'react-datepicker';

import jwt from 'jwt-decode';
import tradeSlice from '../redux/trade/tradeSlice';
import { Spinner } from 'react-bootstrap';

import 'react-datepicker/dist/react-datepicker.css';



ChartJS.register(
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement
)


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(market, buy, sell, profit) {
  return { market, buy, sell, profit };
}

const rows = [
  createData('METAMASK', 159, 6.0, 24),
 
  
];

const theme = createTheme({
  typography: {
    fontFamily: [
      "Rubik",
      "sans-serif"
    ].join(",")
  }
});





const ProfitDashboard = () => {

  const {firstName, isAdmin} = useSelector((state) => state.profile)
  const navigate = useNavigate();
  const {isLoadingT, market, stocks, grossProfit, grossLoss} = useSelector((state) => state.trade)
  
  
  const {isLoading, categories} = useSelector((state) => state.categories)


  const {profilePending, profileSuccess, profileFail} = profileReducer.actions;
    
  
  const {tradePending, tradeSuccess, tradeFail} = tradeSlice.actions;

  
  
  const {categoryPending, categorySuccess, categoryFail} = categoriesReducer.actions;


  const dispatch = useDispatch();
  
  
  const [name, setName] = useState("");
  
  const [month, setMonth] = useState("January");
  
  const [selectedDate, setSelectedDate] = useState(null );

let months = [
  {
    key: "January",
    value: "1",
  },
  
  {
    key: "Febuary",
    value: "2",
  },
  
  {
    key: "March",
    value: "3",
  },
  
  {
    key: "April",
    value: "4",
  },
  
  {
    key: "May",
    value: "5",
  },
  
  {
    key: "June",
    value: "6",
  },
  
  {
    key: "July",
    value: "7",
  },
  
  {
    key: "August",
    value: "8",
  },
  
  {
    key: "September",
    value: "9",
  },
  
  
  {
    key: "October",
    value: "10",
  },
  
  {
    key: "November",
    value: "11",
  },
  
  {
    key: "December",
    value: "12",
  },
];


// this.pickAMonth = React.createRef()




  let data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
  }

  let options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend: {
      labels: {
        fontSize: 26
      }
    }
  }
  
  
  const [valueState,setValueState] = useState("")

  
  const handleChange = async(event) => {
    let category = event.target.value;
    setName(category)
    dispatch(tradePending())

    const tradesfiltered = await  dispatch(filteredTrade(category)); 
    if(tradesfiltered.payload.status == 200){
      dispatch(tradeSuccess(tradesfiltered.payload.data));
    }else{
      dispatch(tradeFail("fetch failed"));
    }    
  }
  
  
  
  let loadTrades = async () =>  {
    dispatch(tradePending())

    const trades = await  dispatch(tradedata()); 
    console.log(trades.payload.status)
    if(trades.payload.status == 200){
      dispatch(tradeSuccess(trades.payload.data));
    }else{
      dispatch(tradeFail("fetch failed"));
    }    
  }
  
  
  
  const handleMonthOnChange = async(event) => {
    
  let arr  =  await stocks.filter(data => {
    let splitResult = data.Date.split('/')
    let month = splitResult[1].replace(/^0+/, '');
    if(month == event){
      return 1
    }
  })
  
  
  if(arr.length > 0){
    const payload =  {
      stock: arr,
      grossLoss,
      grossProfit,
      market
    }
      dispatch(tradeSuccess(payload));
   
  }else{
    alert("No histoty for this month")
  }
      
        
   
  }
  


  
  
  
  let loadCategories = async () =>  {

    const categories = await  dispatch(categoriesdata()); 
    if(categories.payload.status == 200){
      dispatch(categorySuccess(categories.payload.data.categories));
    }else{
      dispatch(categoryFail("fetch failed"));
    }    
  }
  
  
  
  useEffect(() => {
   try{
     const token = localStorage.getItem('token');
     const result = jwt(token);
     console.log(result);
     if(result != null && result.user.isAdmin){
      dispatch(
        profileSuccess(result.user)
      );
      loadCategories();
      loadTrades();
    }
    
   }catch(e){
     
   }
  }, []);
  return (
    <>
      <section>
        <div className='dash'>
          <div className='dash-header'>
            <div className='dash-title'>
              <h2>Sightfull</h2>
            </div>

            <div className='dash-second'>
          
            <form >
             <div className="form-group mt-3">
             <select className="form-select form-select-sm" value={name} onChange={handleChange} aria-label=".form-select-sm example" name="category">
              {
                categories == null ? <option> Loading... </option> : categories.map((el) => (
                  <option>{el}</option>
                
                  ))
              }
              </select>
             </div>
            </form>

              {/* <div className='bell-icon'>
                <FaRegBell />
              </div> */}

              <div className='dash-user'>
                <h4>{ isAdmin ? "Admin" : "User"}</h4>
              </div>
            </div>

          </div>

          <div className='dash-2'>
          
            <div className='dash-header-2 mt-3 mb-5 '>
              <h4>Hi {firstName}, welcome back</h4>
            </div>
            
            <div>
            <DropdownButton id="dropdown-basic-button" title={month}  onSelect={handleMonthOnChange}>
              {
                    months.map((el, i) => (
                      <Dropdown.Item eventKey={el.value}  >{el.key}</Dropdown.Item>

                    ))
              }
              </DropdownButton>
            
            </div>
          

            <div className='profit-loss-split'>
              <div className='split-button mr-5 '>
                <button className='profit'>Profit</button>
                <button className='loss'>Loss</button>
              </div>
            </div>
          </div>
          

          <div className='table-linegraph'>
            <div className='table-section'>
              <h3 className='stock-overview'>{market} Overview</h3>
              <ThemeProvider theme={theme}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Direction</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Quantity</StyledTableCell>
                        <StyledTableCell align="right">Profit($)</StyledTableCell>
                        <StyledTableCell align="right">Date</StyledTableCell>

                        
                      </TableRow>
                    </TableHead>
                    <TableBody>

                      {
                        

                        isLoadingT  ? <Spinner variant="primary" animation="border" /> : (
                       stocks.length == 0 ? ( <StyledTableCell align="right">No history for this period</StyledTableCell>) :
                       stocks.map((row) => (
                        <StyledTableRow key={row.Direction}>
                          <StyledTableCell component="th" scope="row">
                            {row.Direction}
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.Price}</StyledTableCell>
                          <StyledTableCell align="right">{row.Quantity}</StyledTableCell>
                          <StyledTableCell align="right">{row.dpdT}</StyledTableCell>
                          <StyledTableCell align="right">{row.Date}</StyledTableCell>

                          
                        </StyledTableRow>
                        )))   
                      
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              </ThemeProvider>
            </div>
            <div className='linegraph-section'>
              <Bar
                options = {options } 
                data = { data }
                height={200}
              />
              
              <div className='gross-profit w-100 h-100 mt-5'>
              <h4>Gross Profit</h4>
              <h2 className="mb-1 mt-1">${grossProfit}</h2>
              
                 <hr/>          
              <h4>Gross Loss</h4>
              <h2>${grossLoss}</h2>


          
            </div>
            </div>
          </div>
          
          
         

        
        </div>
        
        
        
      </section>
    </>
  )
}

export default ProfitDashboard;