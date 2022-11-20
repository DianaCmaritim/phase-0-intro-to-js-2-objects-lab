/*/ Write your solution in this file!
describe('employees', function() {
    describe('updateEmployeeWithKeyAndValue(employee, key, value)', function () {
      beforeEach(function () {
        for (const key in employee) {
          delete employee[key];
        }

        employee.name = 'Sam';
      });
function employees{
function updateEmployeeWithKeyAndValue(employee, key, value)
function beforeEach */


let employee = {

  name: 'sam',
  streetAddress: '11 Broadway',

  }


  function updateEmployeeWithKeyAndValue(employee, key, value) {

  let employees = {...employee}

  employees[key] = value

  return employees;

  }



  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

  employee[key] = value

  return employee

  }

  function deleteFromEmployeeByKey (employee, key) {

  let newEmployee = {employee}

  delete newEmployee[key]

  return newEmployee

  }

  function destructivelyDeleteFromEmployeeByKey(employee,key) {

  delete employee[key]

  return employee

  }