import type { MetaFunction } from "@remix-run/node";
import { range } from "lodash-es";
import { DateTime } from "luxon";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen flex-col items-stretch">
      <header className="flex flex-col items-start text-gray-800 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 p-4">
        <h1 className="leading text-2xl font-bold ">Centretown Gravel Rides</h1>
      </header>
      <div className="flex grow flex-row gap-9 items-start">
        <nav className="flex flex-col items-center justify-center p-4 gap-4 text-md ">
          <ul>
            {range(12)
              .map((offset) => DateTime.now().plus({ months: offset }))
              .map((date) => (
                <li>{date.toFormat("MMMM")}</li>
              ))}
          </ul>
        </nav>
        <div className="w-px self-stretch border-l-2 border-gray-200 dark:border-gray-700"></div>
        <div className="flex grow flex-col items-stretch justify-start p-4 gap-2">
          {rides.map((ride) => (
            <div className="flex rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
              {ride}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const rides = ["Ride 1", "Ride 2"];
