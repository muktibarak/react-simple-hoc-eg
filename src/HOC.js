import React from "react";

export default function HOC(HocComponent, data) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data
      };
    }
    render() {
      return <HocComponent data={this.state.data} {...this.props} />;
    }
  };
}
