import { figma } from "@figma/code-connect";
import { Heroo } from "../../ui/compositions/Sections/Heroo";

figma.connect(
  Heroo,
  "https://www.figma.com/design/LBbsvgtspK4g3fyEhBD7SY/Simple-Design-System--Community-?node-id=3126-1836&t=2yAR0RAuMSaEtMzk-4",
  {
    props: {
      content: figma.instance("Content"),
    },
    example: ({ content }) => <Heroo>{content}</Heroo>,
  },
);
