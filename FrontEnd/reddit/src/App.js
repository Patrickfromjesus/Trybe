import { Component } from 'react';
import { connect } from 'react-redux';
import fetchReddit from './Redux/actions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { value: '' }
  }
  render() {
    const { subReddit, article, error, loading } = this.props;
    const { value } = this.state;
    return (
      <div>
        <h1>{`Selected: ${value}`}</h1>
        {
          loading ? <h3>LOADING...</h3>
          : (
            <div>
              <select
                onChange={
                  (e) => {
                    this.setState({ value: e.target.value });
                    subReddit(e.target.value);
                  }
                }
              >
                <option>Selecione</option>
                <option id="reactjs">reactjs</option>
                <option id="frontend">frontend</option>
              </select>
              {
                error ? null
                : (
                  <section>
                    {
                      <ul>{ article.map(({ data: { title } }, index) => <li key={ index }>{ title }</li>) }</ul>
                    }
                  </section>
                )
              }
            </div>
          )
        }
      </div>
  );
}
}

const mapStateToProps = (state) => ({
  article: state.reducer.article,
  error: state.reducer.error,
  loading: state.reducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  subReddit: (state) => {
    dispatch(fetchReddit(state));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
