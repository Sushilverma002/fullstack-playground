import styles from "./Book.module.css";

function Book() {
  return (
    <div
      style={{
        height: "200px",
        width: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src="src/public/loader.gif"
        style={{
          height: "60px",
          width: "60px",
        }}
      />
      <img
        src="src/public/choice dekho logo.jpeg"
        alt="logo"
        style={{
          height: "50px",
          width: "50px",
        }}
      />
      <div className={styles.lightGreenBackground}></div>
      <div className={styles.green}></div> {/* green-colored moving div */}
      <div className={styles.lightBlueBackground}></div>
      <div className={styles.blue}></div> {/* blue-colored moving div */}
      <div className={styles.lightRedBackground}></div>
      <div className={styles.red}></div> {/* Red-colored moving div */}
    </div>
  );
}

export default Book;
