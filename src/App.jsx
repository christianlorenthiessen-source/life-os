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
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fafafa",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "30px",
        }}
      >
        Life OS
      </h1>

      <div
        style={{
          backgroundColor: "#ffffff",
          border: "3px solid #dcdcdc",
          borderRadius: "12px",
          padding: "30px",
          marginBottom: "30px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "32px",
            marginTop: 0,
            marginBottom: "30px",
            letterSpacing: "2px",
          }}
        >
          CURRENT DIRECTION
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
            }}
          >
            <h3>PERSONAL</h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div>• Run 50km</div>
              <div>• Read 1 book per month</div>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
            }}
          >
            <h3>RELATIONAL</h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div>• Develope marriage</div>
              <div>• Weekly family connection</div>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
            }}
          >
            <h3>WORK</h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div>• Build Life OS</div>
              <div>• Develope work skils</div>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
            }}
          >
            <h3>FINANCIAL</h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div>• Save $2000 per month</div>
              <div>• Act with frugality</div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#fff7ed",
          borderLeft: "8px solid #ea580c",
          padding: "25px",
          marginBottom: "30px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>BEFORE YOU PLAN</h2>

        <ul>
          <li>You may be tired today.</li>
          <li>You may be stressed today.</li>
          <li>You may be hungry today.</li>
          <li>You may be discouraged today.</li>
          <li>You may be distracted today.</li>
          <li>You may not feel like doing the things that matter today.</li>
        </ul>

        <p
          style={{
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          None of those feelings change what you're trying to build.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#ecfeff",
          borderLeft: "8px solid #0891b2",
          padding: "30px",
          marginBottom: "30px",
          borderRadius: "8px",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            fontSize: "30px",
          }}
        >
          TODAY'S QUESTION
        </h2>

        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            lineHeight: "1.5",
          }}
        >
          Given the person I'm trying to become and the realities of today,
          what is the optimal plan of attack?
        </p>
      </div>

      <textarea
        rows="35"
        defaultValue={`Date: ${date}
Time: ${time}

RECAP (Yesterday)

WINS


LESSONS




JOURNAL ENTRY







PLAN

0000HH
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




CATEGORIES OF FOCUS

WORK
READING
RELATIONSHIP
PHYSICAL HEALTH
FINANCIAL EDUCATION
MUSIC
TIME KILLING
COOK
EAT
CLEAN
SLEEP
HOBBIES
`}
        style={{
          width: "100%",
          padding: "20px",
          fontFamily: "Consolas, monospace",
          fontSize: "14px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          backgroundColor: "#ffffff",
        }}
      />
    </div>
  );
}