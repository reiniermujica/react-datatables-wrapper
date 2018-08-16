import React, { Component } from 'react';
import DataTable from '../../lib/DataTable';
import 'datatables.net-dt/css/jquery.dataTables.min.css';

export default class Example extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>DataTable Example with React</h2>
        <div>
          <DataTable
            options={{
              ajax: 'assets/data.json',
              columns: [{ data: 'id' }, { data: 'name' }, { data: 'phone' }, { data: 'company' }, { data: 'zip' }, { data: 'city' }, { data: 'date' }],
            }}
            paginationLength
            className="table table-striped table-bordered table-hover"
            width="100%"
          >
            <thead>
            <tr>
              <th data-hide="phone">ID</th>
              <th data-class="expand"><i
                className="fa fa-fw fa-user text-muted hidden-md hidden-sm hidden-xs"/>
                Name
              </th>
              <th data-hide="phone"><i
                className="fa fa-fw fa-phone text-muted hidden-md hidden-sm hidden-xs"/>
                Phone
              </th>
              <th>Company</th>`
              <th data-hide="phone,tablet"><i
                className="fa fa-fw fa-map-marker txt-color-blue hidden-md hidden-sm hidden-xs"/>
                Zip
              </th>
              <th data-hide="phone,tablet">City</th>
              <th data-hide="phone,tablet"><i
                className="fa fa-fw fa-calendar txt-color-blue hidden-md hidden-sm hidden-xs"/>
                Date
              </th>
            </tr>
            </thead>
          </DataTable>
        </div>
      </div>
    );
  }
}
