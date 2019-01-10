import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Template as templateApi } from '../api';
import { EditContext } from './EditContext';

export default function template(data, { receiveUpdates = true }) {
  return function (Wrapped) {
    const name = Wrapped.displayName || Wrapped.name;
    class Template extends Component {
      static propTypes = {
        edit: PropTypes.object.isRequired,
      }
      constructor(props) {
        super();
        let remote = null;
        if (Wrapped.getInitialProps) {
          if (!props.edit.inits[name]) {
            props.edit.inits[name] = {
              data: null,
              init: Wrapped.getInitialProps(props)
                .catch(err => console.log('getInitialProps Error:', err))
                .then((data) => {
                  props.edit.inits[name].data = data;
                }),
            };
          } else {
            if (props.edit.inits[name].data) {
              remote = props.edit.inits[name].data;
            }
          }
        }

        this.state = {
          id: null,
          hasChanges: false,
          values: data.values.reduce((acc, v) => ({ ...acc, [v.key]: v.value }), {}),
          remote,
        };
      }
      componentWillMount() {
        const {
          edit,
        } = this.props;
        // const action = templateApi.create(data).then(async (res) => {
        //   const json = await res.json();
        //   if (!receiveUpdates) return;
        //   const {
        //     template: resTemplate,
        //     hasChanges,
        //   } = json;
        //   this.setState({
        //     id: resTemplate.id,
        //     values: resTemplate.values.reduce((acc, v) => ({ ...acc, [v.key]: v.value }), {}),
        //     hasChanges,
        //   });
        // });
        // edit.addAction(action);
      }
      handleUpdate = () => {
        templateApi.update({
          ...data,
          id: this.state.id,
        });
      }
      render() {
        const {
          hasChanges,
        } = this.state;
        return (
          <div>
            {
              hasChanges &&
              <div>
                The remote version of this template doesn&#39;t match. You can sync the remote with your local version. <a href="#">more information</a>&nbsp;
                <button onMouseDown={this.handleUpdate}>Update Template</button>
              </div>
            }
            <Wrapped {...this.props} {...this.state} />
          </div>
        );
      }
    }

    Template.displayName = `Template(${name})`;
    return props =>
      <EditContext.Consumer>
        { edit => <Template {...props} edit={edit} /> }
      </EditContext.Consumer>
    ;
  };
}
