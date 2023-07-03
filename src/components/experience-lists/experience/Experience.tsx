import { useState } from 'react';
import { ExpProps } from '../ExperienceList';
import './experience.styles.scss'
interface Props {
  detailData: ExpProps;
  img?: boolean;
}
const Experience = ({ detailData, img }: Props) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  return (
    <div className="experience-container">
      <div className="column-left">
        {img ? (
          <div className="image-container">
            <img
              className={`project_image ${isHovered ? "hovered" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              src={detailData.imageUrl}
              alt="project_image"
            />
          </div>
        ) : (
          detailData.date?.toLocaleString()
        )}
      </div>
      <div className="column-right">
        <h2 style={{ marginBottom: "5px" }}>
          {img ? detailData.appName : detailData.companyName}
        </h2>
        <h5 style={{ marginBottom: "5px" }}>{!img && detailData.role}</h5>
        <p>{detailData.description}</p>
        <div
          style={{
            marginTop: "10px",
            width: "100%",
            display: "flex",
            gap: "4px",
            flexWrap: "wrap",
          }}
        >
          {detailData.stacks.map((d) => {
            return <button className='buttons'>{d}</button>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience