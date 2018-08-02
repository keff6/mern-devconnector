import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {
  onDeleteClick = (id) => {
    this.props.deleteEducation(id);
  }

  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -&nbsp;
          {
            edu.to === null ? 'Now' :
              <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          }
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.onDeleteClick(edu._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));

    return (
      <div>
        <h4 className="mb-4">Education Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <td>School</td>
              <td>Degree</td>
              <td>Years</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {education}
          </tbody>
        </table>

      </div>
    )
  }
}

Education.propTypes = {
  education: PropTypes.object.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);