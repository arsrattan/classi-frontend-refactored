import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { requireNativeComponent, findNodeHandle } from 'react-native';
import { NativeModules } from '_utils';

const VideoTile = () => {
  useEffect(() => {
    setTimeout(() => {
      NativeFunction.bindVideoView(findNodeHandle(this), this.props.tileId);
    });
    return function cleanup() {
      NativeFunction.unbindVideoView(this.props.tileId);
    };
  });

  return <NativeVideoTile {...this.props} />;
};

VideoTile.propTypes = {
  /**
   * A int value to identifier the Video view, will be used to bind video stream later
   */
  tileId: PropTypes.number,
};

const NativeVideoTile = requireNativeComponent('RNVideoView', VideoTile);

export default VideoTile;
