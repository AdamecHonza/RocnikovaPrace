import ig from "../img/ig.png";
import LinkedIn from "../img/linkedIn.png";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        Created by: Jan Adamec
        <a href="https://www.instagram.com/nas_honzicek/" target="_blank">
          <img src={ig} />
        </a>
        <a href="https://www.linkedin.com/in/jan-adamec-937782261/" target="_blank">
          <img src={LinkedIn} />
        </a>
      </div>
    </footer>
  );
}
