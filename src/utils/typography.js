import Typography from 'typography';
import oceanBeachTheme from 'typography-theme-ocean-beach';

const typography = new Typography(oceanBeachTheme);
oceanBeachTheme.baseLineHeight = 1.615;

export const { scale, rhythm, options } = typography;
export default typography;
