import Spline from '@splinetool/react-spline';
import { useStyles } from './PinataMiata.styles';

export default function PinataMiata() {
  const { classes } = useStyles();

  return (
    <div className={classes.pinataMiataContainer}>
      <Spline scene="https://prod.spline.design/EoHbB1FhPlhsbFkD/scene.splinecode" />
    </div>
  );
}
