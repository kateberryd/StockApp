import React from 'react';
import CoolDog from '../assets/cool-dog.jpg'; 
import Gift from '../assets/gift-box.svg';
import { BiSearch } from 'react-icons/bi';
import { FaRegBell } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';
import './css/LossDashboard.css';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

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
  createData('METAMASK', 237, 9.0, 37),
  createData('METAMASK', 262, 16.0, 24),
  createData('METAMASK', 305, 3.7, 67),
  
];

const theme = createTheme({
  typography: {
    fontFamily: [
      "Rubik",
      "sans-serif"
    ].join(",")
  }
});


const LossDashboard = () => {

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

  return (
    <>
      <section>
        <div className='dash'>
          <div className='dash-header'>

            <div className='dash-title'>
              <h2>Sightfull</h2>
              <h3 className='dash-text'>Dashboard</h3>

              <div className='dash-second'>
                <form className='searchbar'>
                  <input type="text" placeholder='Search' />
                  <span className='search-icon'><BiSearch /></span>
                </form>

                <div className='bell-icon'>
                  <FaRegBell />
                </div>

                <div className='dash-user'>
                  <img src={ CoolDog } alt="" className='user-img'/>
                  <h3>John Doe</h3>
                </div>
              </div>

            </div>
          </div>

          <div className='dash-2'>
            <div className='dash-header-2'>
              <h3>Hello John, Welcome to your Dashboard</h3>
              
              <div className="dropdown">
                <button onclick="myFunction()" className="dropbtn">This month<IoMdArrowDropdown className='down-arrow'/></button>
                <div id="myDropdown" className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              
            </div>

            <div className='split-button'>
              <button className='profit'>Profit</button>
              <button className='loss'>Loss</button>
            </div>
          </div>

          <div className='table-linegraph'>
            <div className='table-section'>
              <h3 className='stock-overview'>Stock Overview</h3>
              <ThemeProvider theme={theme}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Market</StyledTableCell>
                        <StyledTableCell align="right">Buy</StyledTableCell>
                        <StyledTableCell align="right">Sell</StyledTableCell>
                        <StyledTableCell align="right">Profit($)</StyledTableCell>
                        
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.market}>
                          <StyledTableCell component="th" scope="row">
                            {row.market}
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.buy}</StyledTableCell>
                          <StyledTableCell align="right">{row.sell}</StyledTableCell>
                          <StyledTableCell align="right">{row.profit}</StyledTableCell>
                          
                        </StyledTableRow>
                      ))}
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
            </div>
          </div>

          <div className='stocks'>
            <div className='stock-profits'>
              <Pie 
                options = {options } 
                data = { data }
                height={200}
              />
            </div>
            <div className='gross-profit'>
              <h4>Gross Profit</h4>
              <h1>$5400.00</h1>
              <div className='profit-icon'>
                <FiArrowUpRight /><span>4.36%</span>
              </div>
              <p>For the past 1 month</p>
            </div>
            <div className='remark'>
              <img src={ Gift } alt="" className='remark-img' />
              <p>Hey John, This is good month to invest in more stock. Congratulations on your profit.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LossDashboard;