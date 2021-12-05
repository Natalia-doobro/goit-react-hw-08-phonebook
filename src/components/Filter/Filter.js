import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actionsContact from "../../redux/contact/contact-actions";
import {valueFilter} from "../../redux/contact/contact-selectors"
import shortid from "shortid";
import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  const filterInputId = shortid.generate();
  return (
    <label htmlFor={filterInputId} className={s.label}>
      Filter contacts by name
      <input
        type="text"
        id={filterInputId}
        className={s.input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  return { value: valueFilter(state) };
};
const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(actionsContact.changeFilter(e.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
