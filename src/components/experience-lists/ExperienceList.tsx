import './experience-list.styles.scss'
import Experience from './experience/Experience';


export interface ExpProps {
  id: number;
  date?: string | Date;
  role?: string;
  imageUrl?: string;
  appName?: string;
  companyName?: string;
  description: string;
  stacks: string[];
}
interface Props {
  expData: ExpProps[]
  img?: boolean
}
const ExperienceList = ({ expData, img=false }: Props) => {
  return (
    <div className="list-container">
      {expData.map((el: ExpProps) => (
        <Experience detailData={el} img={img} />
      ))}
    </div>
  );
};

export default ExperienceList