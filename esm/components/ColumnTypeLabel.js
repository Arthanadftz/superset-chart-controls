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
export function ColumnTypeLabel({
  type
}) {
  let stringIcon = '';

  if (typeof type !== 'string') {
    stringIcon = '?';
  } else if (type === '' || type === 'expression') {
    stringIcon = 'ƒ';
  } else if (type === 'aggregate') {
    stringIcon = 'AGG';
  } else if (type.match(/.*char.*/i) || type.match(/string.*/i) || type.match(/.*text.*/i)) {
    stringIcon = 'ABC';
  } else if (type.match(/.*int.*/i) || type === 'LONG' || type === 'DOUBLE' || type === 'FLOAT') {
    stringIcon = '#';
  } else if (type.match(/.*bool.*/i)) {
    stringIcon = 'T/F';
  } else if (type.match(/.*time.*/i)) {
    stringIcon = 'time';
  } else if (type.match(/unknown/i)) {
    stringIcon = '?';
  }

  const typeIcon = stringIcon === 'time' ? /*#__PURE__*/React.createElement("i", {
    className: "fa fa-clock-o type-label"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "type-label"
  }, stringIcon);
  return /*#__PURE__*/React.createElement("span", null, typeIcon);
}
ColumnTypeLabel.propTypes = {
  type: _pt.string.isRequired
};
export default ColumnTypeLabel;