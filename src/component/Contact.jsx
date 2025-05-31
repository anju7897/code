import { useState } from "react";
import Swal from "sweetalert2";
import Nav from "./Nav";
import Footer from "./Footer";

const contact = [
  {
    image: "images/contact/b.webp",
    name: "Raghav Singh",
    course: "BCA(Indian Univercity)",
  },
  {
    image: "images/contact/b.webp",
    name: "Rani Singh",
    course: "BCA(Indian Univercity)",
  },
  {
    image: "images/contact/b.webp",
    name: "Rahul Singh",
    course: "BCA(Indian Univercity)",
  },
  {
    image: "images/contact/b.webp",
    name: "Pooja Gupta",
    course: "BCA(Indian Univercity)",
  },
  {
    image: "images/contact/b.webp",
    name: "Sanju Kumar",
    course: "BCA(Indian Univercity)",
  },
  {
    image: "images/contact/b.webp",
    name: "Raghav Singh",
    course: "BCA(Indian Univercity)",
  },
  {
    image: "images/contact/b.webp",
    name: "Raghav Singh",
    course: "BCA(Indian Univercity)",
  },
  {
    image: "images/contact/b.webp",
    name: "Raghav Singh",
    course: "BCA(Indian Univercity)",
  },
];

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactUs = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Thank You , We will try to react you soon",
    });
  };

  return (
    <div>
      <Nav />
      <div
        class=""
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 60,
        }}
      >
        <img
          src="images/contact/h.png"
          style={{
            width: "50%",
            height: "auto",
          }}
        />
        <div
          style={{
            width: "50%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>Contact Us</h1>
          <form
            onSubmit={contactUs}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <label htmlFor="name">Full Name</label>
            <input
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              required
              placeholder="Enter your name"
              name="name"
              style={{
                padding: 10,
                border: "1px solid #ddd",
                borderRadius: 5,
                width: "50%",
              }}
            />

            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              style={{
                padding: 10,
                border: "1px solid #ddd",
                borderRadius: 5,
                width: "50%",
              }}
            />

            <label htmlFor="message">Message</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              required
              placeholder="Message"
              rows={5}
              style={{
                padding: 10,
                border: "1px solid #ddd",
                borderRadius: 5,
                width: "50%",
              }}
            />

            <button
              type="submit"
              style={{
                padding: 10,
                border: "1px solid #ddd",
                borderRadius: 5,
                width: "30%",
                backgroundColor: "#4a90e2",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: 20,
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <section
        className="home"
        style={{
          height: 200,
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 30,
          fontWeight: "bold",
          backgroundImage:
            "linear-gradient( 111.1deg,  rgba(69,150,164,1) 2.5%, rgba(17,20,34,1) 100.3% )",
        }}
      >
        <h1
          style={{
            fontSize: 39,
          }}
        >
          <i
            className="ri-contacts-fill"
            style={{
              fontSize: 40,
              marginRight: 10,
            }}
          ></i>
          Contact Us
        </h1>
      </section>
      <section
        style={{
          width: "80%",
          margin: "0 auto",
          padding: "80px 0px",
          display: "flex",
          columnGap: "2%",
          rowGap: 40,
          flexWrap: "wrap",
        }}
      >
        {contact.map(function (item, index) {
          return (
            <div style={{ width: "23%" }} key={index}>
              <img src={item.image} width="100%" alt={item.image} />
              <h2 style={{ padding: 0, marginBottom: 4 }}>{item.name}</h2>
              <p style={{ margin: 0, padding: 0, color: "silver" }}>
                {item.course}
              </p>
            </div>
          );
        })}
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
