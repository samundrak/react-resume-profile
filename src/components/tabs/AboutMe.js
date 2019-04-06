import React from 'react';
import Paragraph from '../Paragraph';

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
      return <Paragraph content={breaker[0]} />;
    }
    return (
      <div>
        <Paragraph content={breaker[0]} />
        {!this.state.isSeeMore && (
          <a href="javascript:void(0)" onClick={this.handleSeeMore}>
            See litte more...
          </a>
        )}

        {this.state.isSeeMore
          ? breaker.slice(1).map((item, index) => <Paragraph key={index} content={item} />)
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
