import { TableCell, TableHead, TableRow } from '@mui/material'
import { head } from '../../assets/style'

const CustomTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell style={head}>#</TableCell>
      <TableCell style={head}>Icon</TableCell>
      <TableCell style={head}>Name</TableCell>
      <TableCell style={head}>Current Price</TableCell>
      <TableCell style={head}>Last Reload</TableCell>
      <TableCell style={head}>Market Cap</TableCell>
      <TableCell style={head}>Circulating Supply</TableCell>
    </TableRow>
  </TableHead>
)

export { CustomTableHead }
