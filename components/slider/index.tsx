import * as React from 'react';
import { PropTypes } from 'react';
import RcSlider from 'rc-slider';

interface SliderMarks {
  [key: number]: React.ReactNode | {
    style: React.CSSProperties,
    label: React.ReactNode,
  };
}

type SliderValue = number | [number, number];

export interface SliderProps {
  range?: boolean;
  min?: number;
  max?: number;
  step?: number | void;
  marks?: SliderMarks;
  dots?: boolean;
  value?: SliderValue;
  defaultValue?: SliderValue;
  included?: boolean;
  disabled?: boolean;
  onChange?: (value: SliderValue) => void;
  onAfterChange?: (value: SliderValue) => void;
  tipFormatter?: void | ((value: number) => React.ReactNode);
}

export default class Slider extends React.Component<SliderProps, any> {
  static defaultProps = {
    prefixCls: 'ant-slider',
    tipTransitionName: 'zoom-down',
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    tipTransitionName: PropTypes.string,
  };

  render() {
    return <RcSlider {...this.props} />;
  }
}
