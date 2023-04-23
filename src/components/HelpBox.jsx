import React from 'react'
import { string } from 'prop-types';

import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box test-class">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

HelpBox.propTypes = {
  text: string,
  title: string,
};

export default HelpBox;
