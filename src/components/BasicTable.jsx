import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const styles = {
  head: {
    fontSize: '1rem',
    fontWeight: 600,
    backgroundColor: '#1f1717',
    color: '#efefef'
  }
}

const BasicTable = ({ coins }) => {
  return (
    <TableContainer component={Paper} style={{ borderRadius: '0' }}>
      <Table stickyHeader sx={{ minWidth: 650 }} style={{ background: '#ededed' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={styles.head}>#</TableCell>
            <TableCell style={styles.head}>Icon</TableCell>
            <TableCell style={styles.head}>Name</TableCell>
            <TableCell style={styles.head}>Current Price</TableCell>
            <TableCell style={styles.head}>Last Reload</TableCell>
            <TableCell style={styles.head}>Market Cap</TableCell>
            <TableCell style={styles.head}>Circulating Supply</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((coin, index) => (
            <TableRow key={coin.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" width={'0.1%'}>
                {index + 1}
              </TableCell>
              <TableCell align="left" width={'2%'}>
                <img src={coin.image} width={'30px'} />
              </TableCell>
              <TableCell align="left" style={{ fontSize: '1.1rem' }}>
                {coin.name}
                <span
                  style={{
                    marginLeft: '5px',
                    opacity: '0.5',
                    fontSize: '0.8rem'
                  }}
                >
                  {coin.symbol.toUpperCase()}
                </span>
              </TableCell>
              <TableCell align="left" width={'12%'}>
                {'$ ' + coin.current_price}
              </TableCell>
              <TableCell align="left" width={'14%'}>
                {coin.last_updated.slice(0, -5).replace('T', ' ')}
              </TableCell>
              <TableCell align="left" width={'12%'}>
                {'$ ' + coin.market_cap}
              </TableCell>
              <TableCell align="left" width={'12%'}>
                {coin.circulating_supply}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable
