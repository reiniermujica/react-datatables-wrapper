# Guide

## Usage

### Basic usage

```js
import DataTable from 'react-datatables-wrapper';
…

 <DataTable
    options={{
      ajax: 'assets/data.json',
      columns: [{ data: 'id' }, { data: 'name' }, { data: 'phone' },
    }}
    paginationLength
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
    </tr>
    </thead>
  </DataTable>
```

## Themes

Datatables built-in theme

```js
import 'datatables.net-dt/css/jquery.dataTables.min.css';
```
