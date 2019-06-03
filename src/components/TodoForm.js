import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      Año: '',
      nconsejo: '',
      resdecanal: '',
      resrectoral: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      Año: '',
      nconsejo: '',
      resdecanal: '',
      resrectoral: ''
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="Año"
              className="form-control"
              value={this.state.año}
              onChange={this.handleInputChange}
              placeholder="Año"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="nconsejo"
              className="form-control"
              value={this.state.nconsejo}
              onChange={this.handleInputChange}
              placeholder="N° Consejo"
              />
          </div>
          <div className="form-group">
          <label> Fecha con: </label>
          <div>
            <input
              type="date"
              name="fechacon"
              className="form-control"
              value={this.state.nconsejo}
              onChange={this.handleInputChange}
              placeholder="Fechacon"
              />
              </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="resdecanal"
              className="form-control"
              value={this.state.resdecanal}
              onChange={this.handleInputChange}
              placeholder="N° Resolucion Decanal"
              />
          </div>
          <div className="form-group">
          <label> Fecha R.D.: </label>
          <div>
            <input
              type="date"
              name="fechares"
              className="form-control"
              value={this.state.resdecanal}
              onChange={this.handleInputChange}
              placeholder="Fechares"
              />
              </div>
              </div>

         <div className="form-group">
            <input
              type="text"
              name="resdecanal"
              className="form-control"
              value={this.state.resdecanal}
              onChange={this.handleInputChange}
              placeholder="N° Resolucion Rectoral"
              />
          </div>
          <label> Fecha R.R.: </label>
          <div>
            <input
              type="date"
              name="fecharecto"
              className="form-control"
              value={this.state.resrectoral}
              onChange={this.handleInputChange}
              placeholder="Fecharecto"
              />
              </div>
          <button type="submit" className="btn btn-primary">
            Aperturar Presupuesto
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;
