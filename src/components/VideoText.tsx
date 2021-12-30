import React, {
  ReactNode,
  Reducer,
  useEffect,
  useReducer,
  useRef,
} from 'react';

import {
  StyledBackgroundText,
  StyledVideoText,
} from '../styles/components/VideoText';
import { incrementNumber } from '../utils/utils';

interface StateType {
  active: boolean;
  index: number;
}

const TRANSITION_DURATION = 2; // seconds

// 515/960
const VideoText = (props: {
  children?: ReactNode;
  className?: string;
  text?: string;
  src: string | Array<string>;
}) => {
  const { children, text, src, ...rest } = props;
  const sources = typeof src === 'string' ? [src] : src;

  const videoEl: any = useRef(null);
  const [state, setState] = useReducer<Reducer<StateType, Partial<StateType>>>(
    (currentState, newState) => ({ ...currentState, ...newState }),
    {
      active: false,
      index: 0,
    }
  );

  const handleCanPlay = (event: any) => {
    setState({ active: true });
    event?.target.play();
  };
  const handleCanPlayThrough = () => {};

  const handleUpdate = (event: any) => {
    const { currentTime, duration, ended, error } = event.target;

    if (error) {
      console.log('Video error: ', error);
    }

    if (state.active && currentTime + TRANSITION_DURATION >= duration) {
      // fade out
      setState({ active: false });
    }

    if (ended) {
      const nextVideo = incrementNumber(state.index, sources.length);
      setState({
        index: nextVideo,
      });
    }
  };

  useEffect(() => {
    if (videoEl.current) {
      videoEl.current.load(sources[state.index]);
    }
  }, []);

  return (
    <div className="position-relative" {...rest}>
      <StyledBackgroundText>{text || children}</StyledBackgroundText>
      <StyledVideoText
        active={state.active}
        transitionDuration={TRANSITION_DURATION}
      >
        <video
          ref={videoEl}
          muted
          // loop
          // crossOrigin=''
          preload="auto"
          width={720}
          height={385}
          className="svg-clipped-text"
          // poster={posterImage}
          key={state.index}
          onTimeUpdate={handleUpdate}
          onCanPlay={handleCanPlay}
          onCanPlayThrough={handleCanPlayThrough}
        >
          <source src={`${sources[state.index]}`} type="video/mp4" />
          Your browser does not support this video file.
        </video>

        <svg width={720} height={385}>
          <clipPath id="svgTextPath">
            <text x="50%" y="50%">
              {text || children}
            </text>
          </clipPath>
        </svg>
      </StyledVideoText>
    </div>
  );
};

export default VideoText;
