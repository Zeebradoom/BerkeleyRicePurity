'use client';

import { useState } from 'react';

const questions = [
  "Turned in an assignment minutes before the deadline",
  "Forgot to click submit on bCourses and missed the deadline",
  "Wore Berkeley merch to the airport",
  "Took a class because it fit your schedule, not interested",
  "Pet a dog on Sproul during finals week therapy sessions",
  "Saw a Berkeley squirrel steal someone's food",
  "Never stepped on any Berkeley seal",
  "Helped a tourist find Sather Gate when they were lost",
  "Took an Instagram photo at the Campanile during sunset",
  "Fell asleep during the lecture",
  "Forgot to bring ID to Moffit",
  "Avoided Sproul tablers by pretending to be on a fake phone call",
  "Lost your Cal ID more than once and had to replace it",
  "Heard a professor roast Stanford during a lecture",
  "Rubbed the 4.0 Ball before finals",
  "Sat on the 4.0 Hill hoping for good grades",
  "Been to a concert at the Greek Theater",
  "Went to a concert at the Greek Theatre",
  "Dropped a class after the first lecture",
  "Gone to a Big Game",
  "Got food poisoning from Asian Ghetto",
  "Took a nap on the Glade",
  "Got rejected by a consulting club",
  "Changed your major at least once",
  "Got below 50% on a midterm or final exam",
  "Argued with a GSI over partial credit on a test",
  "Took a class Pass/No Pass to avoid hurting your GPA",
  "Did a coffee chat at Strada",
  "Participated in a protest or rally on Sproul Plaza",
  "Googled \"how to drop out of college\" after a midterm",
  "Had a lab partner crush and flirted during experiments",
  "Tried every boba place on Telegraph and ranked them",
  "Waited an hour in line for a club's boba fundraiser",
  "Found a random bike wheel locked up without the bike",
  "Played chess at the Chess Club tables on Telegraph",
  "Went to the Berkeley Botanical Garden for date vibes",
  "Went on a date at Cheeseboard Pizza or Berkeley Marina",
  "Saw a deer northside",
  "Hit by an electric skateboard, scooter, or bike",
  "Ridden an electric skateboard or scooter",
  "Been harassed by a homeless person",
  "Got locked out of your dorm or apartment in pajamas",
  "Enrolled in a class just for the grade curve",
  "Had your Stanford application rejected",
  "Dropped or withdrew from a class after Week 10",
  "Talked to Billie, known as the \"X man\", on Sproul",
  "Had a confession approved and posted to Calfessions",
  "Took free leftovers from a club event and called it dinner",
  "Switched discussion sections just to get an easier GSI",
  "Studied abroad",
  "Pulled an all-nighter studying at Moffitt Library",
  "Got stood up at a Telegraph boba date",
  "Left a party just to eat at Taco Bell Cantina",
  "Took a party bus to SF",
  "Dated someone from another UC campus",
  "Been in a situationship for an entire semester",
  "Took a selfie with Oski",
  "Watched someone try to tightrope walk between trees at the glade",
  "Participated in 4/20 festivities",
  "Debated or argued with a conspiracy theorist on Sproul",
  "Been walked in on by a roommate or suitemate",
  "Had a dormcest relationship",
  "Got caught with a fake ID",
  "Pre-gamed too hard and missed the party entirely",
  "Been to the Tang Center to test for an STD",
  "Been to the Tang Center to be diagnosed with depression or anxiety",
  "Ran from a noise complaint before UCPD showed up",
  "Got rejected from a frat party because it was \"brothers-only\"",
  "Pregamed at a frat house on Channing or Piedmont",
  "Befriended someone just to use them for homeworks",
  "Used Chegg, CourseHero, or Slader to finish homework",
  "Missed a midterm or final due to oversleeping or forgetting",
  "Accidentally joined a graduate-level seminar and didn't realize until halfway",
  "Rushed the field after a Big Game",
  "Joined a fraternity or sorority",
  "Dated someone in AFX",
  "Got kicked out of a bar in Downtown Berkeley",
  "Hooked up with someone from your study group",
  "Had a study buddy turn into a romantic partner",
  "Got into an argument over politics on the first date",
  "Touched the Axe",
  "Got caught cheating and played innocent",
  "Walked home barefoot or lost your shoes after a party",
  "Sneaked out a Tupperware full of food from a Dining Hall",
  "Stolen food from a dining hall",
  "Took someone else's DoorDash/GrubHub order from the lobby",
  "Dated someone purely because they were in a tech consulting club",
  "Got recruited for a startup idea during a tabling event",
  "Ghosted someone you met in a DeCal",
  "Broke something valuable at a frat party and ran",
  "Participated in the naked run",
  "Committed an act of vandalism on university property",
  "Explored the Steam Tunnels",
  "Shotgunned a beer at the Campanile",
  "Hooked up with someone in a co-op or dorm lounge",
  "Hooked up with someone at a Theta Chi or Zete party",
  "Took a Berkeley Bar Crawl (e.g., Raleigh's, Kip's, Tap Haus)",
  "Matched with a classmate or GSI on Hinge or Tinder",
  "Hooked up with someone while their roommate was asleep nearby",
  "Committed an act of vandalism on university property"
];

export default function Home() {
  const [score, setScore] = useState<number>(0);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleCheck = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const calculateScore = () => {
    const checked = checkedItems.filter(item => item).length;
    const purityScore = 100 - Math.round((checked / questions.length) * 100);
    setScore(purityScore);
    setShowResults(true);
  };

  const resetTest = () => {
    setCheckedItems(new Array(questions.length).fill(false));
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Berkeley Purity Test</h1>
        
        {!showResults ? (
          <>
            <p className="text-lg mb-6 text-center">
              Check all the items that apply to you:
            </p>
            <div className="space-y-4">
              {questions.map((question, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={`question-${index}`}
                    checked={checkedItems[index]}
                    onChange={() => handleCheck(index)}
                    className="w-5 h-5"
                  />
                  <label htmlFor={`question-${index}`} className="text-sm">
                    {question}
                  </label>
                </div>
              ))}
            </div>
            <button
              onClick={calculateScore}
              className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Calculate My Score
            </button>
          </>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Your Berkeley Purity Score:</h2>
            <p className="text-6xl font-bold text-blue-600">{score}%</p>
            <p className="text-lg">
              {score > 90 ? "You're practically a Berkeley virgin!" :
               score > 70 ? "You're a typical Berkeley student!" :
               score > 50 ? "You've had quite the Berkeley experience!" :
               "You're a Berkeley legend (or menace)!"}
            </p>
            <button
              onClick={resetTest}
              className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-300 transition"
            >
              Take Test Again
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
