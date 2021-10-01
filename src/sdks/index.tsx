import React, { useState } from "react";

type Props = {
  root: any;
  liveTitle: any;
};
export default function ({ root, liveTitle }: Props) {
  const [active, setActive] = useState(0);
  return (
    <>
      <div style={styles.menuWrap}>
        {["LiveTitle", "Root"].map((item, idx) => (
          <div
            style={{ ...styles.item, ...(active === idx ? styles.active : {}) }}
            key={idx}
            onClick={() => setActive(idx)}
          >
            {item}
          </div>
        ))}
      </div>
      {active === 0 && <LiveTitleWrap>{liveTitle}</LiveTitleWrap>}
      {active === 1 && <div>{root}</div>}
    </>
  );
}

const LiveTitleWrap = ({ children }: any) => {
  const [maxHeight, setMaxHeight] = useState(false);
  return (
    <div>
      <div
        style={{
          ...styles.liveTitleWrap,
          height: maxHeight ? "calc(100% - 160px)" : 400,
        }}
      >
        {children}
      </div>
      <span
        onClick={() => {
          setMaxHeight(true);
        }}
      >
        max height
      </span>
    </div>
  );
};

const styles = {
  menuWrap: {
    display: "flex",
    margin: `auto`,
    alignItems: `center`,
    justifyContent: `center`,
    borderBottom: `1px solid #eee`,
  },
  item: {
    padding: 10,
    borderBottom: "3px solid #fff",
    cursor: "pointer",
  },
  active: {
    borderBottom: "3px solid #000",
    fontWeight: 600,
  },
  liveTitleWrap: {
    width: 400,
    height: 400,
    border: "2px solid #000",
    margin: `30px auto`,
  },
};
