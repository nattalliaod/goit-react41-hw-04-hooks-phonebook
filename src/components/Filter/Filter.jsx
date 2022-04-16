import PropTypes from 'prop-types';
import { Text, FindContact } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    return (
        <>
            <Text>
                Find contacts by name
                <FindContact
                    type="text"
                    name="filter"
                    value={value}
                    onChange={onChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Text>
        </>
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}