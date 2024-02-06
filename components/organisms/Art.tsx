import Tooltip from "../atoms/Tooltip";
import ArtGrid from "../molecules/ArtGrid";

const Art: React.FC = () => {
  return (
    <section>
      <div className="wrapper" id="aw">
        <Tooltip tip="Click on an artwork">
          <h2>
            <span>art</span>:work
          </h2>
        </Tooltip>
      </div>
      <ArtGrid />
    </section>
  );
};

export default Art;
