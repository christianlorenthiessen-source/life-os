export default function App() {
  const now = new Date();

const date = now.toLocaleDateString("en-GB");

const time = now.toLocaleTimeString("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Life OS</h1>

      <h2>Who Am I Trying To Become?</h2>

      <ul>
        <li>Physical and Mentally Healthy</li>
        <li>Good Husband, Son, Brother</li>
      </ul>
<textarea
  rows="10"
  defaultValue={`Date: ${date}
Time: ${time}

============================================================================
RECAP (yesterday)
============================================================================
WINS

LESSONS

============================================================================
JOURNAL ENTRY 
============================================================================


============================================================================
PLAN (what am I doing today that directly impacts my goals, my practice IS my focus)
============================================================================
1200HH
0100HH
0200HH
0300HH
0400HH
0500HH
0600HH
0700HH
0800HH
0900HH
1000HH
1100HH
1200HH
1300HH
1400HH
1500HH
1600HH
1700HH
1800HH
1900HH
2000HH
2100HH
2200HH
2300HH

CATEGORIES OF FOCUS: WORK, READING, REALTIONSHIP, PHYSICAL HEALTH, FINANCIAL EDUCATION, MUSIC, TIME KILLING, COOK, EAT, CLEAN, SLEEP, HOBBIES
`}
  style={{
    width: "100%",
    padding: "10px"
  }}
></textarea>
      <h2>
        GOALS
      </h2>
      <h4>
        Get Mariah h R I L At t P
      </h4>
      <h4>
        Run 50km's straight
      </h4>
      <h4>
        1 Book per month
      </h4>
      <h4>
        Practice E Major, all 5 variations. #novemebergoles
      </h4>
      <h4>Get BST Licence and earn 450$ to recoup investment cost</h4>
      <h4>save baby costs for 1 year</h4>
      <h4>save for mariah's education (10,000$)</h4>


    </div>
  );
}
