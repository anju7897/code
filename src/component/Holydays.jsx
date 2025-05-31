import Nav from "./Nav";
import Footer from "./Footer";

const holidays = [
  {
    title: "Summer Vacation 2025",
    duration: "1 Month",
    date: "12-09-2025",
  },
  {
    title: "Summer Vacation 2025",
    duration: "1 Month",
    date: "12-09-2025",
  },
  {
    title: "Summer Vacation 2025",
    duration: "1 Month",
    date: "12-09-2025",
  },
  {
    title: "Summer Vacation 2025",
    duration: "1 Month",
    date: "12-09-2025",
  },
  {
    title: "Summer Vacation 2025",
    duration: "1 Month",
    date: "12-09-2025",
  },
];
const Holydays = () => {
  return (
    <div>
      <Nav />
      <div
        style={{
          width: "60%",
          margin: "0 auto",
          padding: "64px 0",
        }}
      >
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Your Holyday's
        </h1>
        <table width="100%">
          <thead>
            <tr
              style={{
                backgroundColor: "#ddd",
              }}
            >
              <th
                style={{
                  padding: 10,
                }}
              >
                S/No
              </th>
              <th>Title</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((item, index) => (
              <tr
                style={{
                  textAlign: "center",
                }}
              >
                <td
                  style={{
                    padding: 14,
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {index + 1}
                </td>
                <td
                  style={{
                    padding: 14,
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {item.title}
                </td>
                <td
                  style={{
                    padding: 14,
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {item.duration}
                </td>
                <td
                  style={{
                    padding: 14,
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};
export default Holydays;
