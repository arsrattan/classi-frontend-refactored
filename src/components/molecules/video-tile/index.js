import PropTypes from 'prop-types';
import React from 'react';
import { requireNativeComponent, findNodeHandle } from 'react-native';
import { NativeModules } from '_utils';

const NativeVideoTile = requireNativeComponent('RNVideoView', VideoTile);

class VideoTile {
  componentDidMount() {
    NativeModules.NativeFunction.bindVideoView(
      findNodeHandle(this),
      this.props.tileId,
    );
  }

  componentDidUnmount() {
    NativeModules.NativeFunction.unbindVideoView(this.props.tileId);
  }

  render() {
    return <NativeVideoTile {...this.props} />;
  }
}

VideoTile.propTypes = {
  /**
   * A int value to identifier the Video view, will be used to bind video stream later
   */
  tileId: PropTypes.number,
};

export default VideoTile;
