// src/components/Timeline.tsx
import history1 from "../../assets/images/history1.webp";
import history2 from "../../assets/images/ourhistory2.webp";
import history3 from "../../assets/images/history3.webp";
import history4 from "../../assets/images/history4.webp";
import history5 from "../../assets/images/history5.webp";
import history6 from "../../assets/images/history6.webp";

type TimelineItem = {
  year: string;
  title: string;
  text: string;
  img: string;
};

const timelineData: TimelineItem[] = [
  {
    year: "1996",
    title: "First Sea Restaurant Was Founded",
    text: "Assumenda possimus eaque illo iste, autem. Porro eveniet, autem ipsam vitae amet repellat repudiandae tenetur, quod corrupti consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore aspernatur.",
    img: history1,
  },
  {
    year: "2001",
    title: "Oscar Has Started Cooking For You",
    text: "Assumenda possimus eaque illo iste, autem. Porro eveniet, autem ipsam vitae amet repellat repudiandae tenetur, quod corrupti consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore aspernatur.",
    img: history2,
  },
  {
    year: "2004",
    title: "A New Restaurant Has Been Established in London",
    text: "Assumenda possimus eaque illo iste, autem. Quod corrupti consectetur cum. Repudiandae dignissimos fugiat sit nam. Tempore aspernatur.",
    img: history3,
  },
  {
    year: "2010",
    title: "A New Restaurant Was Opened in Paris",
    text: "Porro eveniet, autem ipsam vitae amet repellat repudiandae tenetur, quod corrupti consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore aspernatur.",
    img: history4,
  },
  {
    year: "2012",
    title: "We Got a Michelin Star",
    text: "Assumenda possimus eaque illo iste, autem. Porro eveniet, autem ipsam vitae amet repellat repudiandae tenetur, quod corrupti consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore aspernatur.",
    img: history5,
  },
  {
    year: "2019",
    title: "Established Own Address Delivery",
    text: "Porro eveniet, autem ipsam vitae amet repellat repudiandae tenetur, quod corrupti consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore aspernatur.",
    img: history6,
  },
];

export default function Timeline() {
  return (
    <div className="tst-timeline container">
      {timelineData.map((item, index) => (
        <div key={index} className="tst-timeline-item tst-mb-30">
          <div className="tst-year tst-mb-15">
            <span>{item.year}</span>
          </div>
          <div className="tst-tl-content">
            <div className="tst-ilust">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="tst-tl-text-frame">
              <h4 className="tst-mb-30">
                <span>{item.title}</span>
              </h4>
              <div className="tst-text">
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
