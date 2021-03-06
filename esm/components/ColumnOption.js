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
import { ColumnTypeLabel } from './ColumnTypeLabel';
import InfoTooltipWithTrigger from './InfoTooltipWithTrigger';
export function ColumnOption({
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

  return /*#__PURE__*/React.createElement("span", null, showType && columnType && /*#__PURE__*/React.createElement(ColumnTypeLabel, {
    type: columnType
  }), /*#__PURE__*/React.createElement("span", {
    className: "m-r-5 option-label"
  }, column.verbose_name || column.column_name), column.description && /*#__PURE__*/React.createElement(InfoTooltipWithTrigger, {
    className: "m-r-5 text-muted",
    icon: "info",
    tooltip: column.description,
    label: `descr-${column.column_name}`
  }), hasExpression && /*#__PURE__*/React.createElement(InfoTooltipWithTrigger, {
    className: "m-r-5 text-muted",
    icon: "question-circle-o",
    tooltip: column.expression,
    label: `expr-${column.column_name}`
  }));
}
ColumnOption.propTypes = {
  showType: _pt.bool
};
export default ColumnOption;