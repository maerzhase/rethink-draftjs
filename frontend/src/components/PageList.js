import React from 'react';
import { Page } from '../api';
class PageList extends React.Component {
  constructor() {
    super();
    this.state = {
      pages: [],
    };
  }

  componentDidMount() {
    Page.getAll()
      .then(pages => pages.json())
      .then((pages) => {
        this.setState({
          pages: pages.pages
        })
      });
  }

  render() {
    const {
      pages,
    } = this.state;
    return (
      <div>
        <hr />
        <ul>
          {
            pages.map((page) => {
              return (
                <li key={page.id}>
                  <h2>{page.title} ({page.type || page.name})</h2>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default PageList;
