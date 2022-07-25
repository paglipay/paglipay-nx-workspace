import Layout from '../layout/layout';
import styles from './three-column-card.module.css';
import { useAppSelector } from '../../hooks';
import { selectDLayout } from '../../features/dlayout/dlayoutSlice';

/* eslint-disable-next-line */
export interface ThreeColumnCardProps {
  jsonData: any[];
  sections: any[];
}

export function ThreeColumnCard(props: ThreeColumnCardProps) {
  const { sections, jsonData } = useAppSelector(selectDLayout);

  return <Layout jsonData={jsonData} sections={sections} />;
}

export default ThreeColumnCard;
