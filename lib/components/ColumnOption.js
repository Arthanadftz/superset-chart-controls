"use strict";

exports.__esModule = true;
exports.ColumnOption = ColumnOption;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ColumnTypeLabel = require("./ColumnTypeLabel");

var _InfoTooltipWithTrigger = _interopRequireDefault(require("./InfoTooltipWithTrigger"));

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
function ColumnOption({
  column,
  showType = false
}) {
  const hasExpression = column.expression && column.expression !== column.column_name;
  let columnType = column.type;

  if (column.is_dttm) {
    columnType = 'time';
  } else if (hasExpression) {
    columnType = 'expression';
  }

  return /*#__PURE__*/_react.default.createElement("span", null, showType && columnType && /*#__PURE__*/_react.default.createElement(_ColumnTypeLabel.ColumnTypeLabel, {
    type: columnType
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "m-r-5 option-label"
  }, column.verbose_name || column.column_name), column.description && /*#__PURE__*/_react.default.createElement(_InfoTooltipWithTrigger.default, {
    className: "m-r-5 text-muted",
    icon: "info",
    tooltip: column.description,
    label: `descr-${column.column_name}`
  }), hasExpression && /*#__PURE__*/_react.default.createElement(_InfoTooltipWithTrigger.default, {
    className: "m-r-5 text-muted",
    icon: "question-circle-o",
    tooltip: column.expression,
    label: `expr-${column.column_name}`
  }));
}

ColumnOption.propTypes = {
  showType: _propTypes.default.bool
};
var _default = ColumnOption;
exports.default = _default;