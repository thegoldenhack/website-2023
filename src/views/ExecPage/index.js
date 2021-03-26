import React, { Component } from "react";

import ApplicationGrid from "../../components/ApplicationGrid";
import ApplicationModal from "../../components/ApplicationModal";

export default class ExecPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <ApplicationGrid /> */}
        <ApplicationModal />
      </div>
    );
  }
}
