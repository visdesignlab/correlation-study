import { Text } from '@mantine/core';
import { StimulusParams } from '../../../../../../store/types';
import ScatterPlots from './ScatterPlots';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ScatterWrapper({ parameters }: StimulusParams<{r1: number, r2: number}>) {
  return (
    <>
      <ScatterPlots r={parameters.r1} />
      <ScatterPlots r={parameters.r2} />
      <Text>Hello world</Text>
    </>

  );
}

export default ScatterWrapper;
