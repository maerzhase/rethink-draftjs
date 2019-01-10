import React, { Component } from 'react';
import PropTypes from 'prop-types';
import template from './template';
import { Page as pageApi, Template as templateApi } from '../api';

const blank = {
  name: 'Blank',
  values: [
    {
      key: 'abstract',
      value: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },
    {
      key: 'title',
      value: 'New Blank Template',
    },
    {
      key: 'tel',
      value: '+49 30 123 456 78',
    },
  ],
};

@template(blank, { receiveUpdates: false })
class Blank extends Component { // eslint-disable-line
  static propTypes = {
    values: PropTypes.object.isRequired,
    edit: PropTypes.object.isRequired,
    remote: PropTypes.object.isRequired,
  }

  static async getInitialProps(props) {
    console.log('props', props);
    const data = await templateApi.create(blank);
    const parsed = await data.json();
    return {
      test: parsed,
    }
  }

  render() {
    const {
      values,
      remote,
    } = this.props;
    console.log(remote);
    return (
      <div>
        <button onMouseDown={() => {
          pageApi.create({
            ...blank,
            values: Object.keys(values).map(key => ({key: key, value: values[key]})),
          })
        }}>create page</button>
        <h1>{values.title}</h1>
        <p>{values.abstract}</p>
        <p>{values.tel}</p>
      </div>
    );
  }
}

export default Blank;
