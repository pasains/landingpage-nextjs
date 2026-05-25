import { Title } from "../../components/title";
import { Picture } from "../../components/picture";
import { Description } from "../../components/description";

function Card(props: any) {
  return (
    <div className="container">
      <Title title={props.title} />
      <Description description={props.description} />
      <Picture picture={props.picture} />
    </div>
  );
}

export default Card;
