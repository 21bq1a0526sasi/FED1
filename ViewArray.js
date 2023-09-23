import React, { Component } from 'react';

class TableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sdata: [
        { sid: 524, sname: 'rupa', sadd: 'guntur' },
        { sid: 529, sname: 'lekha', sadd: 'nambur' },
        { sid: 517, sname: 'shiny', sadd: 'ponnur' }
      ]
    };
  }

  render() {
    const { sdata } = this.state;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>sid</th>
              <th>sname</th>
              <th>sadd</th>
            </tr>
          </thead>
          <tbody>
            {sdata.map((item) => (
              <tr key={item.sid}>
                <td>{item.sid}</td>
                <td>{item.sname}</td>
                <td>{item.sadd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableForm;
