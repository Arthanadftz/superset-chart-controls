"use strict";

exports.__esModule = true;
exports.default = RadioButtonControl;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@superset-ui/core");

var _InfoTooltipWithTrigger = require("./InfoTooltipWithTrigger");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
const Styles = _core.styled.div`
  .btn:focus {
    outline: none;
  }
  .control-label + .btn-group {
    margin-top: 1px;
  }
  .btn-group .btn.active {
    background: ${({
  theme
}) => theme.colors.secondary.light5};
    box-shadow: none;
    font-weight: ${({
  theme
}) => theme.typography.weights.bold};
  }
`;

function RadioButtonControl({
  label: controlLabel,
  description,
  value: initialValue,
  hovered,
  options,
  onChange
}) {
  const currentValue = initialValue || options[0].value;
  const onClick = (0, _react.useCallback)(e => {
    onChange(e.currentTarget.value);
  }, [onChange]);
  return /*#__PURE__*/_react.default.createElement(Styles, null, controlLabel && /*#__PURE__*/_react.default.createElement("div", {
    className: "control-label"
  }, controlLabel, ' ', hovered && description && /*#__PURE__*/_react.default.createElement(_InfoTooltipWithTrigger.InfoTooltipWithTrigger, {
    tooltip: description,
    placement: "top"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "btn-group btn-group-sm"
  }, options.map(({
    label,
    value
  }, i) => /*#__PURE__*/_react.default.createElement("button", {
    key: value,
    type: "button",
    className: `btn btn-default ${options[i].value === currentValue ? 'active' : ''}`,
    value: value,
    onClick: onClick
  }, label))));
}

RadioButtonControl.propTypes = {
  label: _propTypes.default.node,
  description: _propTypes.default.string,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.node.isRequired
  })).isRequired,
  hovered: _propTypes.default.bool,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired
};