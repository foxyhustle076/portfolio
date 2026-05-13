import { MdArrowOutward } from "react-icons/md";

interface Props {
  image?: string;
  alt?: string;
  video?: string;
  iframe?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  return (
    <div className="work-image">
      {props.iframe ? (
        <div className="work-image-in iframe-container">
          <div className="work-link" style={{ opacity: 1, zIndex: 10 }}>
            <MdArrowOutward />
          </div>
          <iframe
            src={props.iframe}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="work-image-in">
          <div className="work-link" style={{ opacity: 1 }}>
            <MdArrowOutward />
          </div>
          {props.video ? (
            <video src={props.video} autoPlay muted playsInline loop></video>
          ) : (
            <img src={props.image} alt={props.alt} />
          )}
        </div>
      )}
    </div>
  );
};

export default WorkImage;
