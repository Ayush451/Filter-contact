import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import data from '../data'
import Search from './Search';

function table({search, setSearch}) {
  return (
    <Container>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            </tr>
        </thead>

        <tbody>
          {data.filter((item)=>{
            return search.toLowerCase() === '' ? item : item.First_Name.toLocaleLowerCase().includes(search)
          }).map((item)=>(
            <tr key={item.id}>
              <td>{item.First_Name}</td>
              <td>{item.Last_Name}</td>
              <td>{item.email}</td>
              <td>{item.Phone_Num}</td>
            </tr>
          ))}
            
           
        </tbody>
        </Table>
    </Container>
  );
}

export default table;