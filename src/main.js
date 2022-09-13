import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

/*HORIZONTAL LISTER*/
const items = document.querySelectorAll("#horisontalliste li");
scroll(
  animate("#horisontalliste", {
    transform: ["none", `translateX(-${items.length - 1}00vw)`],
  }),
  { target: document.querySelector("#horisontalscrollsection") }
);

const pics = document.querySelectorAll("#horisontalliste_2 li");
scroll(
  animate("#horisontalliste_2", {
    transform: ["none", `translateX(-${pics.length - 1}00vw)`],
  }),
  { target: document.querySelector("#horisontalscrollsection_2") }
);

/*SCROLL BAR*/
scroll(animate(".progress-bar", { scaleX: [0, 1] }));

// inView
inView(".txtinview", ({ target }) => {
  animate(
    target.querySelectorAll("p"),
    { x: [-2000, 0] },
    { duration: 1, delay: stagger(1, { start: 0.25 }) }
  );
});
