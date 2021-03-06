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
import { ControlType, ControlSetItem, ExpandedControlItem, ControlOverrides } from '../types';
export declare function expandControlType(controlType: ControlType): "HiddenControl" | "AnnotationLayerControl" | React.ComponentClass<any, any> | React.FunctionComponent<any> | typeof import("../components/RadioButtonControl").default | "SelectControl" | "SelectAsyncControl" | "MetricsControl" | "FixedOrMetricControl" | "AdhocFilterControl" | "FilterBoxItemControl" | "DatasourceControl" | "VizTypeControl" | "ColorPickerControl" | "ColorSchemeControl" | "DateFilterControl" | "ColorMapControl" | "BoundsControl" | "CheckboxControl" | "CollectionControl" | "SliderControl" | "SpatialControl" | "TextAreaControl" | "TextControl" | "TimeSeriesColumnControl" | "ViewportControl" | "RadioButtonControl";
/**
 * Expand a shorthand control config item to full config in the format of
 *   {
 *     name: ...,
 *     config: {
 *        type: ...,
 *        ...
 *     }
 *   }
 */
export declare function expandControlConfig(control: ControlSetItem, controlOverrides?: ControlOverrides): ExpandedControlItem;
//# sourceMappingURL=expandControlConfig.d.ts.map