const Footer = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <footer
        style={{
          backgroundColor: "#323232",
          color: "white",
          height: "400px",
          width: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "40%",
            padding: "50px",
          }}
        >
          <h3>About Company</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            explicabo inventore impedit incidunt consectetur eaque consequuntur
            temporibus molestiae voluptas odio, amet beatae. Nihil sapiente
            neque laboriosam aliquam, quos numquam architecto perferendis
            suscipit ut. Maxime beatae laboriosam iusto? Odit numquam, nobis
            officia non alias, hic laborum sequi, explicabo illo ex deleniti.
          </p>
        </div>

        <div
          style={{
            width: "29%",
            padding: "50px",
          }}
        >
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About</p>
          <p>Contact Us</p>
        </div>

        <div
          style={{
            width: "29%",
            padding: "50px",
          }}
        >
          <h3>Social Media</h3>
          <p>Facebook</p>
          <p>Youtube</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p></p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
