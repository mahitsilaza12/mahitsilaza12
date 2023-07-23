<template>
    <div class="container">
      <table id="myTable" class="table table-striped table-bordered table-custom">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john.doe@gmail.com</td>
            <td>555-555-1212</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>jane.smith@gmail.com</td>
            <td>555-555-1313</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import $ from 'jquery'
  import 'datatables.net/js/jquery.dataTables.min.js'
  import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js'
  
  export default {
    name: 'ProduitList',
    mounted() {
      $('#myTable').DataTable()
    },
  }
  </script>
  
  <style>
  @import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
  .table-custom td {
    padding: 10px;
}
  </style>
  