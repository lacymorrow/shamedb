import React, {
  ReactNode,
  Reducer,
  useEffect,
  useReducer,
  useRef,
} from 'react';

import { StyledVideoText, StyledWrapper } from '../styles/components/VideoText';
import { incrementNumber } from '../utils/utils';

interface StateType {
  active: boolean;
  interactive: boolean;
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
  const [width, height] = [720, 385];
  const { children, text, src, ...rest } = props;
  const sources = typeof src === 'string' ? [src] : src;

  const videoEl: any = useRef(null);
  const [state, setState] = useReducer<Reducer<StateType, Partial<StateType>>>(
    (currentState, newState) => ({ ...currentState, ...newState }),
    {
      active: false,
      interactive: false,
      index: 0,
    }
  );

  const nextVideoIndex = () => incrementNumber(state.index, sources.length);

  const nextVideo = () => {
    if (state.interactive || videoEl.current.paused) {
      setState({ active: false, interactive: false });

      setTimeout(() => {
        setState({
          index: nextVideoIndex(),
        });
      }, TRANSITION_DURATION * 1000);
    }
  };

  const handleCanPlay = (event: any) => {
    setState({ active: true });
    event?.target.play();

    setTimeout(() => {
      setState({
        interactive: true,
      });
    }, TRANSITION_DURATION * 1000);
  };
  const handleCanPlayThrough = () => {};

  const handleUpdate = (event: any) => {
    const { currentTime, duration, ended, error } = event.target;

    if (error) {
      console.log('Video error: ', error);
    }

    if (state.active && currentTime + TRANSITION_DURATION >= duration) {
      // Fade out
      setState({ active: false, interactive: false });
    }

    if (ended) {
      nextVideo();
    }
  };

  useEffect(() => {
    if (videoEl.current) {
      videoEl.current.load(sources[state.index]);
    }
  }, []);

  return (
    <StyledWrapper {...rest} width={width} height={height} onClick={nextVideo}>
      {/* <StyledBackgroundText>{text || children}</StyledBackgroundText> */}
      <svg width={width} height={height}>
        <text x="50%" y="50%" id="" className="text-shadow">
          {text || children}
        </text>
      </svg>
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
          width={width}
          height={height}
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

        <svg width={width} height={height}>
          <clipPath id="svgTextPath">
            <text x="50%" y="50%">
              {text || children}
            </text>
          </clipPath>
        </svg>
      </StyledVideoText>
    </StyledWrapper>
  );
};

export default VideoText;
