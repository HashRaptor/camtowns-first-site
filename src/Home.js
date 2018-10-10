import React, { Component } from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


function LinkWithTooltip({ id, children, href, tooltip }) {
  return (
    <OverlayTrigger
      overlay={<Tooltip id={id}>{tooltip}</Tooltip>}
      placement="top"
      delayShow={300}
      delayHide={150}
    >
      <a href={href}>{children}</a>
    </OverlayTrigger>
  );
}


class Home extends Component {
  render() {
    return (
      <div>
        <p>I'm a{' '}
          <LinkWithTooltip tooltip="crazy person" href="#" id="tooltip-1">
            software engineer
          </LinkWithTooltip>.
        </p>

      </div>
    );
  }
}

export default Home;