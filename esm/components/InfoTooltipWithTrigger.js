import _pt from "prop-types";

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import { kebabCase } from 'lodash';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { t } from '@superset-ui/core';
const tooltipStyle = {
  wordWrap: 'break-word'
};
export function InfoTooltipWithTrigger({
  label,
  tooltip,
  bsStyle,
  onClick,
  icon = 'info-circle',
  className = 'text-muted',
  placement = 'right'
}) {
  const iconClass = `fa fa-${icon} ${className} ${bsStyle ? `text-${bsStyle}` : ''}`;
  const iconEl = /*#__PURE__*/React.createElement("i", {
    role: "button",
    "aria-label": t('Show info tooltip'),
    tabIndex: 0,
    className: iconClass,
    style: {
      cursor: onClick ? 'pointer' : undefined
    },
    onClick: onClick,
    onKeyPress: onClick && (event => {
      if (event.key === 'Enter' || event.key === ' ') {
        onClick();
      }
    })
  });

  if (!tooltip) {
    return iconEl;
  }

  return /*#__PURE__*/React.createElement(OverlayTrigger, {
    placement: placement,
    overlay: /*#__PURE__*/React.createElement(Tooltip, {
      id: `${kebabCase(label)}-tooltip`,
      style: tooltipStyle
    }, tooltip)
  }, iconEl);
}
InfoTooltipWithTrigger.propTypes = {
  label: _pt.string,
  tooltip: _pt.string,
  icon: _pt.string,
  onClick: _pt.func,
  placement: _pt.string,
  bsStyle: _pt.string,
  className: _pt.string
};
export default InfoTooltipWithTrigger;