import { useState } from "react";
import { styles } from "./styles";
import { Card, Toggle } from "./components";
import { cards } from "./constants";
function App() {
  const [plan, setPlan] = useState("annually");

  return (
    <div className="bg-neutral-lighter z-10 relative">
      <div
        className="absolute inset-0 -z-10 bg-pattern-top
        bg-[right_-10rem_top_0] sm:bg-right-top
      bg-[length:300px_calc(25rem+10vw)] bg-no-repeat"
      ></div>
      <div className="hidden sm:block absolute inset-0 -z-10 bg-pattern-bottom bg-no-repeat bg-[bottom_0rem_left_0rem] bg-[length:20rem_20rem]"></div>
      <main className="grid min-h-screen md:place-items-center">
        <div
          className={`flex flex-col gap-16 ${styles.paddingX} ${styles.paddingY}`}
        >
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-neutral">Our Pricing</h1>
            <Toggle currentPlan={plan} setPlan={setPlan} />
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:justify-center md:gap-0 md:items-center md:flex-wrap">
            {cards.map((card) => (
              <Card
                key={card.id}
                type={card.type}
                title={card.title}
                price={`${
                  plan === "annually" ? card.price.annually : card.price.monthly
                }`}
                offers={card.offers}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
