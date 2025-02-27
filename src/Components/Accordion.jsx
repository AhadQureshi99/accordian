import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const data = [
    {
      title: "Do I have to allow the use of cookies?",
      content:
        "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      title: "How do I change my My Page password?",
      content:
        "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      title: "What is BankID?",
      content:
        "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
    },
    {
      title: "Whose birth number can I use?",
      content:
        "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
    },
    {
      title: "When do I recieve a password ordered by letter?",
      content:
        "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan",
    },
  ];

  return (
    <div className="main">
      <h1>
        Questions and
        <br /> Answers About
        <br /> Login
      </h1>
      <div className="accordion">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
