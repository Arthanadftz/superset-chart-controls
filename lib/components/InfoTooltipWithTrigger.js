"use strict";

exports.__esModule = true;
exports.InfoTooltipWithTrigger = InfoTooltipWithTrigger;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _reactBootstrap = require("react-bootstrap");

var _core = require("@superset-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
const tooltipStyle = {
  wordWrap: 'break-word'
};

function InfoTooltipWithTrigger({
  label,
  tooltip,
  bsStyle,
  onClick,
  icon = 'info-circle',
  className = 'text-muted',
  placement = 'right'
}) {
  const iconClass = `fa fa-${icon} ${className} ${bsStyle ? `text-${bsStyle}` : ''}`;

  const iconEl = /*#__PURE__*/_react.default.createElement("i", {
    role: "button",
    "aria-label": (0, _core.t)('Show info tooltip'),
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

  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    placement: placement,
    overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, {
      id: `${(0, _lodash.kebabCase)(label)}-tooltip`,
      style: tooltipStyle
    }, tooltip)
  }, iconEl);
}

InfoTooltipWithTrigger.propTypes = {
  label: _propTypes.default.string,
  tooltip: _propTypes.default.string,
  icon: _propTypes.default.string,
  onClick: _propTypes.default.func,
  placement: _propTypes.default.string,
  bsStyle: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = InfoTooltipWithTrigger;
exports.default = _default;