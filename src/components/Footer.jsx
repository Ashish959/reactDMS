import "../styles/footer.css";
import "../styles/variables.css";

export default function Footer() {
  return (
    <div className="footer">
      <span>Copyright &copy; 2020 - 2026 - MASSIST CRM</span>
      <span className="footer-links">
        <a href="privacy-policy.html">Privacy Policy</a> |{" "}
        <a href="contact-us.html">Contact us</a>
      </span>
    </div>
  );
}