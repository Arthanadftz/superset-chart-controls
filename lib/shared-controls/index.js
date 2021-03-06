"use strict";

exports.__esModule = true;
exports.default = exports.D3_TIME_FORMAT_OPTIONS = exports.D3_FORMAT_DOCS = exports.D3_FORMAT_OPTIONS = exports.PRIMARY_COLOR = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@superset-ui/core");

var _utils = require("../utils");

var _constants = require("../constants");

var _ColumnOption = require("../components/ColumnOption");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */

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

/**
 * This file exports all controls available for use in chart plugins internal to Superset.
 * It is not recommended to use the controls here for any third-party plugins.
 *
 * While the React components located in `controls/components` represent different
 * types of controls (CheckboxControl, SelectControl, TextControl, ...), the controls here
 * represent instances of control types, that can be reused across visualization types.
 *
 * When controls are reused across viz types, their values are carried over as a user
 * changes the chart types.
 *
 * While the keys defined in the control itself get passed to the controlType as props,
 * here's a list of the keys that are common to all controls, and as a result define the
 * control interface.
 */
const categoricalSchemeRegistry = (0, _core.getCategoricalSchemeRegistry)();
const sequentialSchemeRegistry = (0, _core.getSequentialSchemeRegistry)();
const PRIMARY_COLOR = {
  r: 0,
  g: 122,
  b: 135,
  a: 1
}; // input choices & options

exports.PRIMARY_COLOR = PRIMARY_COLOR;
const D3_FORMAT_OPTIONS = [['SMART_NUMBER', 'Adaptative formating'], ['~g', 'Original value'], [',d', ',d (12345.432 => 12,345)'], ['.1s', '.1s (12345.432 => 10k)'], ['.3s', '.3s (12345.432 => 12.3k)'], [',.1%', ',.1% (12345.432 => 1,234,543.2%)'], ['.3%', '.3% (12345.432 => 1234543.200%)'], ['.4r', '.4r (12345.432 => 12350)'], [',.3f', ',.3f (12345.432 => 12,345.432)'], ['+,', '+, (12345.432 => +12,345.432)'], ['$,.2f', '$,.2f (12345.432 => $12,345.43)'], ['DURATION', 'Duration in ms (66000 => 1m 6s)'], ['DURATION_SUB', 'Duration in ms (100.40008 => 100ms 400??s 80ns)']];
exports.D3_FORMAT_OPTIONS = D3_FORMAT_OPTIONS;
const ROW_LIMIT_OPTIONS = [10, 50, 100, 250, 500, 1000, 5000, 10000, 50000];
const SERIES_LIMITS = [0, 5, 10, 25, 50, 100, 500];
const D3_FORMAT_DOCS = (0, _core.t)('D3 format syntax: https://github.com/d3/d3-format');
exports.D3_FORMAT_DOCS = D3_FORMAT_DOCS;
const D3_TIME_FORMAT_OPTIONS = [['smart_date', (0, _core.t)('Adaptative formating')], ['%d/%m/%Y', '%d/%m/%Y | 14/01/2019'], ['%m/%d/%Y', '%m/%d/%Y | 01/14/2019'], ['%Y-%m-%d', '%Y-%m-%d | 2019-01-14'], ['%Y-%m-%d %H:%M:%S', '%Y-%m-%d %H:%M:%S | 2019-01-14 01:32:10'], ['%d-%m-%Y %H:%M:%S', '%Y-%m-%d %H:%M:%S | 14-01-2019 01:32:10'], ['%H:%M:%S', '%H:%M:%S | 01:32:10']];
exports.D3_TIME_FORMAT_OPTIONS = D3_TIME_FORMAT_OPTIONS;
const timeColumnOption = {
  verbose_name: 'Time',
  column_name: '__timestamp',
  description: (0, _core.t)('A reference to the [Time] configuration, taking granularity into account')
};
const groupByControl = {
  type: 'SelectControl',
  label: (0, _core.t)('Group by'),
  queryField: 'groupby',
  multi: true,
  freeForm: true,
  clearable: true,
  default: [],
  includeTime: false,
  description: (0, _core.t)('One or many columns to group by'),
  optionRenderer: c => /*#__PURE__*/_react.default.createElement(_ColumnOption.ColumnOption, {
    showType: true,
    column: c
  }),
  valueRenderer: c => /*#__PURE__*/_react.default.createElement(_ColumnOption.ColumnOption, {
    column: c
  }),
  valueKey: 'column_name',
  allowAll: true,
  filterOption: ({
    data: opt
  }, text) => opt.column_name && opt.column_name.toLowerCase().includes(text.toLowerCase()) || opt.verbose_name && opt.verbose_name.toLowerCase().includes(text.toLowerCase()) || false,
  promptTextCreator: label => label,

  mapStateToProps(state, {
    includeTime
  }) {
    const newState = {};

    if (state.datasource) {
      const options = state.datasource.columns.filter(c => c.groupby);

      if (includeTime) {
        options.push(timeColumnOption);
      }

      newState.options = options;
    }

    return newState;
  },

  commaChoosesOption: false
};
const metrics = {
  type: 'MetricsControl',
  queryField: 'metrics',
  multi: true,
  label: (0, _core.t)('Metrics'),
  validators: [_core.validateNonEmpty],
  default: c => {
    const metric = (0, _utils.mainMetric)(c.savedMetrics);
    return metric ? [metric] : null;
  },
  mapStateToProps: ({
    datasource
  }) => {
    return {
      columns: datasource ? datasource.columns : [],
      savedMetrics: datasource ? datasource.metrics : [],
      datasourceType: datasource == null ? void 0 : datasource.type
    };
  },
  description: (0, _core.t)('One or many metrics to display')
};
const metric = { ...metrics,
  multi: false,
  label: (0, _core.t)('Metric'),
  description: (0, _core.t)('Metric'),
  default: c => (0, _utils.mainMetric)(c.savedMetrics)
};
const datasourceControl = {
  type: 'DatasourceControl',
  label: (0, _core.t)('Datasource'),
  default: null,
  description: null,
  mapStateToProps: ({
    datasource
  }) => {
    return {
      datasource
    };
  }
};
const viz_type = {
  type: 'VizTypeControl',
  label: (0, _core.t)('Visualization Type'),
  default: 'table',
  description: (0, _core.t)('The type of visualization to display')
};
const color_picker = {
  type: 'ColorPickerControl',
  label: (0, _core.t)('Fixed Color'),
  description: (0, _core.t)('Use this to define a static color for all circles'),
  default: PRIMARY_COLOR,
  renderTrigger: true
};
const metric_2 = { ...metric,
  label: (0, _core.t)('Right Axis Metric'),
  clearable: true,
  description: (0, _core.t)('Choose a metric for right axis')
};
const linear_color_scheme = {
  type: 'ColorSchemeControl',
  label: (0, _core.t)('Linear Color Scheme'),
  choices: () => sequentialSchemeRegistry.values().map(value => [value.id, value.label]),
  default: sequentialSchemeRegistry.getDefaultKey(),
  clearable: false,
  description: '',
  renderTrigger: true,
  schemes: () => sequentialSchemeRegistry.getMap(),
  isLinear: true
};
const secondary_metric = { ...metric,
  label: (0, _core.t)('Color Metric'),
  default: null,
  validators: [],
  description: (0, _core.t)('A metric to use for color')
};
const columnsControl = { ...groupByControl,
  label: (0, _core.t)('Columns'),
  description: (0, _core.t)('One or many columns to pivot as columns')
};
const druid_time_origin = {
  type: 'SelectControl',
  freeForm: true,
  label: _constants.TIME_FILTER_LABELS.druid_time_origin,
  choices: [['', 'default'], ['now', 'now']],
  default: null,
  description: (0, _core.t)('Defines the origin where time buckets start, ' + 'accepts natural dates as in `now`, `sunday` or `1970-01-01`')
};
const granularity = {
  type: 'SelectControl',
  freeForm: true,
  label: _constants.TIME_FILTER_LABELS.granularity,
  default: 'one day',
  choices: [[null, 'all'], ['PT5S', '5 seconds'], ['PT30S', '30 seconds'], ['PT1M', '1 minute'], ['PT5M', '5 minutes'], ['PT30M', '30 minutes'], ['PT1H', '1 hour'], ['PT6H', '6 hour'], ['P1D', '1 day'], ['P7D', '7 days'], ['P1W', 'week'], ['week_starting_sunday', 'week starting Sunday'], ['week_ending_saturday', 'week ending Saturday'], ['P1M', 'month'], ['P3M', 'quarter'], ['P1Y', 'year']],
  description: (0, _core.t)('The time granularity for the visualization. Note that you ' + 'can type and use simple natural language as in `10 seconds`, ' + '`1 day` or `56 weeks`')
};
const granularity_sqla = {
  type: 'SelectControl',
  label: _constants.TIME_FILTER_LABELS.granularity_sqla,
  description: (0, _core.t)('The time column for the visualization. Note that you ' + 'can define arbitrary expression that return a DATETIME ' + 'column in the table. Also note that the ' + 'filter below is applied against this column or ' + 'expression'),
  default: c => c.default,
  clearable: false,
  optionRenderer: c => /*#__PURE__*/_react.default.createElement(_ColumnOption.ColumnOption, {
    showType: true,
    column: c
  }),
  valueRenderer: c => /*#__PURE__*/_react.default.createElement(_ColumnOption.ColumnOption, {
    column: c
  }),
  valueKey: 'column_name',
  mapStateToProps: state => {
    const props = {};

    if (state.datasource) {
      props.options = state.datasource.columns.filter(c => c.is_dttm);
      props.default = null;

      if (state.datasource.main_dttm_col) {
        props.default = state.datasource.main_dttm_col;
      } else if (props.options && props.options.length > 0) {
        props.default = props.options[0].column_name;
      }
    }

    return props;
  }
};
const time_grain_sqla = {
  type: 'SelectControl',
  label: _constants.TIME_FILTER_LABELS.time_grain_sqla,
  default: 'P1D',
  description: (0, _core.t)('The time granularity for the visualization. This ' + 'applies a date transformation to alter ' + 'your time column and defines a new time granularity. ' + 'The options here are defined on a per database ' + 'engine basis in the Superset source code.'),
  mapStateToProps: ({
    datasource
  }) => ({
    choices: (datasource == null ? void 0 : datasource.time_grain_sqla) || null
  })
};
const time_range = {
  type: 'DateFilterControl',
  freeForm: true,
  label: _constants.TIME_FILTER_LABELS.time_range,
  default: (0, _core.t)('Last week'),
  // this value is translated, but the backend wouldn't understand a translated value?
  description: (0, _core.t)('The time range for the visualization. All relative times, e.g. "Last month", ' + '"Last 7 days", "now", etc. are evaluated on the server using the server\'s ' + 'local time (sans timezone). All tooltips and placeholder times are expressed ' + 'in UTC (sans timezone). The timestamps are then evaluated by the database ' + "using the engine's local timezone. Note one can explicitly set the timezone " + 'per the ISO 8601 format if specifying either the start and/or end time.'),
  mapStateToProps: ({
    form_data
  }) => ({
    endpoints: (form_data == null ? void 0 : form_data.time_range_endpoints) || null
  })
};
const row_limit = {
  type: 'SelectControl',
  freeForm: true,
  label: (0, _core.t)('Row limit'),
  validators: [_core.legacyValidateInteger],
  default: 10000,
  choices: (0, _utils.formatSelectOptions)(ROW_LIMIT_OPTIONS)
};
const limit = {
  type: 'SelectControl',
  freeForm: true,
  label: (0, _core.t)('Series limit'),
  validators: [_core.legacyValidateInteger],
  choices: (0, _utils.formatSelectOptions)(SERIES_LIMITS),
  description: (0, _core.t)('Limits the number of time series that get displayed. A sub query ' + '(or an extra phase where sub queries are not supported) is applied to limit ' + 'the number of time series that get fetched and displayed. This feature is useful ' + 'when grouping by high cardinality dimension(s).')
};
const timeseries_limit_metric = {
  type: 'MetricsControl',
  label: (0, _core.t)('Sort By'),
  default: null,
  description: (0, _core.t)('Metric used to define the top series'),
  mapStateToProps: ({
    datasource
  }) => ({
    columns: (datasource == null ? void 0 : datasource.columns) || [],
    savedMetrics: (datasource == null ? void 0 : datasource.metrics) || [],
    datasourceType: datasource == null ? void 0 : datasource.type
  })
};
const series = { ...groupByControl,
  label: (0, _core.t)('Series'),
  multi: false,
  default: null,
  description: (0, _core.t)('Defines the grouping of entities. ' + 'Each series is shown as a specific color on the chart and ' + 'has a legend toggle')
};
const entity = { ...groupByControl,
  label: (0, _core.t)('Entity'),
  default: null,
  multi: false,
  validators: [_core.validateNonEmpty],
  description: (0, _core.t)('This defines the element to be plotted on the chart')
};
const x = { ...metric,
  label: (0, _core.t)('X Axis'),
  description: (0, _core.t)('Metric assigned to the [X] axis'),
  default: null
};
const y = { ...metric,
  label: (0, _core.t)('Y Axis'),
  default: null,
  description: (0, _core.t)('Metric assigned to the [Y] axis')
};
const size = { ...metric,
  label: (0, _core.t)('Bubble Size'),
  default: null
};
const y_axis_format = {
  type: 'SelectControl',
  freeForm: true,
  label: (0, _core.t)('Y Axis Format'),
  renderTrigger: true,
  default: 'SMART_NUMBER',
  choices: D3_FORMAT_OPTIONS,
  description: D3_FORMAT_DOCS,
  mapStateToProps: state => {
    var _state$controls, _state$controls$compa;

    const showWarning = ((_state$controls = state.controls) == null ? void 0 : (_state$controls$compa = _state$controls.comparison_type) == null ? void 0 : _state$controls$compa.value) === 'percentage';
    return {
      warning: showWarning ? (0, _core.t)('When `Calculation type` is set to "Percentage change", the Y ' + 'Axis Format is forced to `.1%`') : null,
      disabled: showWarning
    };
  }
};
const adhoc_filters = {
  type: 'AdhocFilterControl',
  label: (0, _core.t)('Filters'),
  default: null,
  description: '',
  mapStateToProps: ({
    datasource
  }) => ({
    columns: (datasource == null ? void 0 : datasource.columns.filter(c => c.filterable)) || [],
    savedMetrics: (datasource == null ? void 0 : datasource.metrics) || [],
    datasource
  }),
  provideFormDataToProps: true
};
const custom_filters = {
  type: 'CustomFilterControl',
  label: (0, _core.t)('Custom Filters'),
  default: null,
  description: '',
  mapStateToProps: ({
    datasource
  }) => ({
    datasource
  }),
  provideFormDataToProps: true
};
const color_scheme = {
  type: 'ColorSchemeControl',
  label: (0, _core.t)('Color Scheme'),
  default: categoricalSchemeRegistry.getDefaultKey(),
  renderTrigger: true,
  choices: () => categoricalSchemeRegistry.keys().map(s => [s, s]),
  description: (0, _core.t)('The color scheme for rendering chart'),
  schemes: () => categoricalSchemeRegistry.getMap()
};
const label_colors = {
  type: 'ColorMapControl',
  label: (0, _core.t)('Color Map'),
  default: {},
  renderTrigger: true,
  mapStateToProps: ({
    form_data: {
      color_namespace: colorNamespace,
      color_scheme: colorScheme
    }
  }) => ({
    colorNamespace,
    colorScheme
  })
};
const sharedControls = {
  metrics,
  metric,
  datasource: datasourceControl,
  viz_type,
  color_picker,
  metric_2,
  linear_color_scheme,
  secondary_metric,
  groupby: groupByControl,
  columns: columnsControl,
  druid_time_origin,
  granularity,
  granularity_sqla,
  time_grain_sqla,
  time_range,
  row_limit,
  limit,
  timeseries_limit_metric,
  series,
  entity,
  x,
  y,
  size,
  y_axis_format,
  adhoc_filters,
  custom_filters,
  color_scheme,
  label_colors
};
var _default = sharedControls;
exports.default = _default;