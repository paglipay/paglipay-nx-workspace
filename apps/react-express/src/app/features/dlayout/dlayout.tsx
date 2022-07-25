import Layout from '../../components/layout/layout';
// import * as Yup from 'yup';
import { useAppSelector } from '../../hooks';
import { selectDLayout } from '../../features/dlayout/dlayoutSlice';

/* eslint-disable-next-line */
export interface DLayoutProps {
  jsonData: any[];
  sections: any[];
}

export function DLayout(props: DLayoutProps) {
  const { sections, jsonData } = useAppSelector(selectDLayout);
  return <Layout jsonData={jsonData} sections={sections} />;
}

export default DLayout;
