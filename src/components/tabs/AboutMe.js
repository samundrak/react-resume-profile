import React from 'react';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSeeMore: false,
    };
  }
  handleSeeMore = () => {
    this.setState({
      isSeeMore: !this.state.isSeeMore,
    });
  };
  seeMoreMaker = (content) => {
    const breaker = content.split('---');
    if (breaker.length < 2) {
      return (
        <p>
          <i dangerouslySetInnerHTML={{ __html: breaker[0] }} />
        </p>
      );
    }
    return (
      <div>
        <p>
          <i dangerouslySetInnerHTML={{ __html: breaker[0] }} />
        </p>

        {!this.state.isSeeMore && (
          <a href="javascript:void(0)" onClick={this.handleSeeMore}>
            See litte more...
          </a>
        )}

        {this.state.isSeeMore
          ? breaker.slice(1).map((item, index) => (
            <p key={index}>
              <i dangerouslySetInnerHTML={{ __html: item }} />
            </p>
            ))
          : ''}
        {this.state.isSeeMore && (
          <a href="javascript:void(0)" onClick={this.handleSeeMore}>
            thats enough, hide it.
          </a>
        )}
      </div>
    );
  };
  render() {
    return this.seeMoreMaker(this.props.content);
  }
}
export default props => <AboutMe {...props} />;
