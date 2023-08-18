import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Filter = () => {
    return (
        <div className='filter-cont'>
            <InputGroup className="mb-3">
                <InputGroup.Text>First and last name</InputGroup.Text>
                <Form.Control aria-label="First name" />
            </InputGroup>
        </div>
    )
};

export default Filter;