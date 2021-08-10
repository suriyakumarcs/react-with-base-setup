import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';

import { fetchSiteListRequest } from '../../store/home/actions';
import { AppState } from '../../store/rootReducer';
import { Site } from '../../store/home/types';
import Button from '../../components/button/Button';

import styles from './Home.module.scss';

interface MyProps extends RouteComponentProps {
  pending: boolean;
  sites: Site[];
  error: string | null;
  fetchSiteList: () => void;
}

interface MyState {
  list: Site[];
}
class Home extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSiteList();
  }

  createNewBootstrapRequest = () => {
    // TODO: Redirect to create bootstrap page
    console.log('Function executed!!');
  };

  viewAllHistory = () => {
    this.props.history.push('/history');
  };

  render() {
    const { pending, sites } = this.props;
    return (
      <main style={{ padding: '15px' }} className="text-primary">
        <section className={`${styles.homeSection}`}>
          <div className={`${styles.parentRow} row`}>
            <div className={`${styles.buttonSection} col-12`}>
              <div className="row justify-content-between mb-4">
                <div className="col-sm-6 col-lg-5 col-xl-4">
                  <Button
                    name="Create Bootstrap Request"
                    callBack={this.createNewBootstrapRequest}
                    icon="bi bi-plus-circle"
                  />
                </div>
                <div className="col-xs-6 col-sm-4 col-lg-3 text-sm-right">
                  <button
                    type="button"
                    className={`${styles.viewHistory} btn btn-primary`}
                    onClick={this.viewAllHistory}
                  >
                    View all History
                  </button>
                </div>
              </div>
            </div>
            <div className={`${styles.searchSection} col-12 mb-3`}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search site/stack"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <i
                  className={`${styles.searchIcon} bi bi-search position-absolute`}
                ></i>
              </div>
            </div>
            {this.props.error ? (
              <div id="error" className="col error">
                Something went wrong!
              </div>
            ) : (
              <div className="col-12">
                <ul id="list-group" className="list-group">
                  {sites && sites.length
                    ? sites.map((site, index: number) => (
                        <li className="list-group-item" key={site.id}>
                          {++index}. {site.first_name}
                        </li>
                      ))
                    : pending && <div id="no-result">No results found!</div>}
                </ul>
              </div>
            )}
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  pending: state.home.pending,
  sites: state.home.siteList,
  error: state.home.error,
});

/* eslint-disable @typescript-eslint/no-explicit-any*/
const mapDispatchToProps = (dispatch: any) => ({
  fetchSiteList: () => dispatch(fetchSiteListRequest()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
