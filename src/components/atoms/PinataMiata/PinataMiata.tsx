import {
  useState
} from 'react';
import { useStyles } from './PinataMiata.styles';
import {Application, SplineEvent} from '@splinetool/runtime';
import { ScrollTop } from '../../organisms/LandingPage/LandingPage';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export interface IPinataMiata {
  scrollTop: ScrollTop;
}

export interface IAnimatePinataMiata {
  scrollTop: ScrollTop;
}

const animatePinataMiata = ({ scrollTop }: IAnimatePinataMiata): (scrollTop: number) => number => {
  const carStartScrollTop = 50;
  const carEndScrollTop = 800;
  const numCarKeyframes = 20;
  const carPositionStart = -1695;
  const carPositionEnd = 600;
  const getKeyframeIndexFromScrollTop = (scrollTop: number) => {
    return Math.floor((scrollTop - carStartScrollTop) / ((carEndScrollTop - carStartScrollTop) * numCarKeyframes));
  }
  console.log("scrollTop", scrollTop);
  return (scrollTop: number) => {
    const keyframeIndex = getKeyframeIndexFromScrollTop(scrollTop);
    const keyframePosition = (keyframeIndex / numCarKeyframes) * (carPositionEnd - carPositionStart);
    return carPositionStart + keyframePosition;
  }
}

export default function PinataMiata({ scrollTop }: IPinataMiata) {
  const [spline, setSpline] = useState({} as Application);
  const { classes } = useStyles();

  const onLoad = (spline: Application) => {
    setSpline(spline);
  }

  const triggerAnimation = () => {
    spline.emitEvent('start', 'pinataMiata');
  }
  console.log("scrollTop", scrollTop);

  return (
    <div className={classes.pinataMiataContainer}>
      <Spline
        scene="https://prod.spline.design/EoHbB1FhPlhsbFkD/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}
