"use strict";

exports.__esModule = true;
exports.TIME_FILTER_LABELS = void 0;

var _core = require("@superset-ui/core");

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
// eslint-disable-next-line import/prefer-default-export
const TIME_FILTER_LABELS = {
  time_range: (0, _core.t)('Time Range'),
  granularity_sqla: (0, _core.t)('Time Column'),
  time_grain_sqla: (0, _core.t)('Time Grain'),
  druid_time_origin: (0, _core.t)('Origin'),
  granularity: (0, _core.t)('Time Granularity')
};
exports.TIME_FILTER_LABELS = TIME_FILTER_LABELS;