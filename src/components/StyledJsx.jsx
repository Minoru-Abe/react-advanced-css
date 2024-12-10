export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT</button>
      </div>
      <style jsx="true">{`
        .container {
          width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .title {
          color: red;
          font-size: 18px;
        }

        .button {
          color: #fff;
          background-color: blue;
          padding: 8px;
        }
      `}</style>
    </>
  );
};
