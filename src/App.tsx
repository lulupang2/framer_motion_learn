import styles from "App.module.scss";
import Card from "./components/Card";
import { Animation1_Tumbnail } from "./example/Animation/Animation1";
function App() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <main className={styles.Home}>
        {/* <Card label="Card 1" />
        <Card label="Card 2" />
        <Card label="Card 3" /> */}
        {/* <Animation1 /> */}
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Card label={`Card ${i}`} key={i}>
              <Animation1_Tumbnail />
            </Card>
          ))}
      </main>
    </>
  );
}

export default App;
