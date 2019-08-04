import React from 'react';
import PropTypes from 'prop-types';

function QuestionSummary({
  id,
  title,
  tags,
  date,
  summary,
}) {
  return (
    <div>
      {id}
      {title}
      {tags}
      {date}
      {summary}
    </div>
  );
}

QuestionSummary.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default QuestionSummary;
