import React, { Component } from 'react';
import { connect } from 'react-redux'
 
class TodosContainer extends Component {
 
  render() {
    return(
      <div></div>
    );
  }
};
 
export default connect(const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
 
export default connect(mapStateToProps)(TodosContainer);)(TodosContainer);