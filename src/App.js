//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function ScoreContainer(props) {
  return (
    <div className={props.homeOrAway}>
      <h2 className={props.homeOrAway + "__name"}>{props.team}</h2>

      {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

      <div className="home__score">{props.score}</div>
    </div>
  );
}

function TeamSetter(props) {
  const [team, setTeamName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          props.setTeam(team);
        }}
      >
        <label>
          <h3>{props.homeOrAway} Team</h3>
          <input
            type="text"
            value={team}
            onChange={event => {
              event.preventDefault();
              setTeamName(event.target.value);
            }}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      <form
        onSubmit={event => {
          event.preventDefault();
          props.setTeamScore(score);
        }}
      >
        <label>
          <h4>Score:</h4>
          <input
            type="number"
            value={score}
            onChange={event => {
              event.preventDefault();
              setScore(event.target.value);
            }}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [time, setTime] = useState("00:00");
  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  return (
    <div className="container">
      <section class="setters">
        <TeamSetter
          homeOrAway="Home"
          setTeam={setHomeTeam}
          setTeamScore={setHomeScore}
        />
        <TeamSetter
          homeOrAway="Away"
          setTeam={setAwayTeam}
          setTeamScore={setAwayScore}
        />
      </section>
      <section className="scoreboard">
        <div className="topRow">
          <ScoreContainer team={homeTeam} homeOrAway="home" score={homeScore} />
          <div className="timer">{time}</div>
          <ScoreContainer team={awayTeam} homeOrAway="away" score={awayScore} />
        </div>
        <BottomRow down={down} toGo={toGo} ballOn={ballOn} quarter={quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={() => setHomeScore(homeScore + 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setHomeScore(homeScore + 3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setAwayScore(awayScore + 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setAwayScore(awayScore + 3)}
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
