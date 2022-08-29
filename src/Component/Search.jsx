import React from 'react'
import { Container } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

const Search = ({search, setSearch}) => {
  return (
    <div className='App'>
        <Container>
            <h1 className='text-center mt-4'>Contact Details</h1>
            <Form>
                <InputGroup className='my-3' >
                    <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Search Contact Name' />
                </InputGroup>
            </Form>
        </Container>
    </div>
  )
}

export default Search;