import styles from "App.module.scss";
import Card from "./components/Card";
import Animation1, {
  Animation1_Tumbnail,
} from "./example/Animation/Animation1";
import { useMatch, useNavigate } from "react-router-dom";
import { Modal } from "./components/Modal";
export default function Home() {
  const navigate = useNavigate();
  const uriMatch = useMatch("/example/:exampleId");
  const onClick = (exampleId: number) => {
    navigate(`/example/${exampleId}`);
  };
  return (
    <main className={styles.Home}>
      {/* <Card label="Card 1" />
    <Card label="Card 2" />
    <Card label="Card 3" /> */}
      {/* <Animation1 /> */}
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <Card onClick={() => onClick(i)} label={`Card ${i}`} key={i}>
            <Animation1_Tumbnail />
          </Card>
        ))}
      {uriMatch ? (
        <Modal exampleId={uriMatch.params.exampleId || ""}>
          <Animation1 />
        </Modal>
      ) : null}
    </main>
  );
}
