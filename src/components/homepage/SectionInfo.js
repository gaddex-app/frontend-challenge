import './SectionInfo.css';
const SectionInfo = (props) => {
    const {title} = props;

    return (
      <div className="sectionInfo">
        <div style= {{width: '200px', fontSize: '20px', fontWeight: 'bold'}}>{title}</div>
        <div className="bottomBorderLine"></div>
      </div>  
    )

}

export default SectionInfo;