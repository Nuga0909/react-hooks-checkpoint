import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Filter = () => {
    return (
        <div className='filter-cont'>
            <InputGroup className="mb-3">
                <InputGroup.Text>Search for movie</InputGroup.Text>
                <Form.Control aria-label="Movie title" />
            </InputGroup>
        </div>
    )
};

export default Filter;