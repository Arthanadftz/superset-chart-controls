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
import React from 'react';
import { ColumnMeta, SelectControlConfig } from '../types';
export declare const PRIMARY_COLOR: {
    r: number;
    g: number;
    b: number;
    a: number;
};
export declare const D3_FORMAT_OPTIONS: string[][];
export declare const D3_FORMAT_DOCS: string;
export declare const D3_TIME_FORMAT_OPTIONS: string[][];
declare const sharedControls: {
    metrics: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "MetricsControl">;
    metric: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "MetricsControl">;
    datasource: import("../types").BaseControlConfig<"DatasourceControl", string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], unknown>;
    viz_type: import("../types").BaseControlConfig<"VizTypeControl", string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], unknown>;
    color_picker: import("../types").BaseControlConfig<"ColorPickerControl", string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], unknown>;
    metric_2: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "MetricsControl">;
    linear_color_scheme: import("../types").BaseControlConfig<"ColorSchemeControl", string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], unknown>;
    secondary_metric: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "MetricsControl">;
    groupby: SelectControlConfig<ColumnMeta, "SelectControl">;
    columns: SelectControlConfig<ColumnMeta, "SelectControl">;
    druid_time_origin: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "SelectControl">;
    granularity: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "SelectControl">;
    granularity_sqla: SelectControlConfig<ColumnMeta, "SelectControl">;
    time_grain_sqla: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "SelectControl">;
    time_range: import("../types").BaseControlConfig<"DateFilterControl", string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], unknown>;
    row_limit: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "SelectControl">;
    limit: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "SelectControl">;
    timeseries_limit_metric: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "MetricsControl">;
    series: SelectControlConfig<ColumnMeta, "SelectControl">;
    entity: SelectControlConfig<ColumnMeta, "SelectControl">;
    x: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "MetricsControl">;
    y: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "MetricsControl">;
    size: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "MetricsControl">;
    y_axis_format: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "SelectControl">;
    adhoc_filters: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "AdhocFilterControl">;
    custom_filters: SelectControlConfig<string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], "CustomFilterControl">;
    color_scheme: import("../types").BaseControlConfig<"ColorSchemeControl", string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], unknown>;
    label_colors: import("../types").BaseControlConfig<"ColorMapControl", string | Record<string, any> | [import("../utils").Formattable, React.ReactNode], unknown>;
};
export default sharedControls;
//# sourceMappingURL=index.d.ts.map