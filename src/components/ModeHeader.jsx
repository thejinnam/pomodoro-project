const ModeHeader = ({ timerSettings, handleModeChange, themeSettings }) => {
  return (
    <>
      <form
        className="controls"
        style={{ fontFamily: `${themeSettings.font}` }}
      >
        <input
          type="radio"
          id="pomo"
          name="mode"
          checked={timerSettings.mode === 'pomo'}
          //   defaultChecked={timerSettings.mode === 'pomo'}
          onChange={handleModeChange}
          className="hidden"
        />
        <label
          htmlFor="pomo"
          className="cursor-pointer"
          style={{
            backgroundColor:
              timerSettings.mode === 'pomo'
                ? `${themeSettings.color}`
                : 'transparent',
          }}
        >
          pomodoro
        </label>

        <input
          type="radio"
          id="short"
          name="mode"
          checked={timerSettings.mode === 'short'}
          onChange={handleModeChange}
          className="hidden"
        />
        <label
          htmlFor="short"
          className="cursor-pointer"
          style={{
            backgroundColor:
              timerSettings.mode === 'short'
                ? `${themeSettings.color}`
                : 'transparent',
          }}
        >
          short break
        </label>

        <input
          type="radio"
          id="long"
          name="mode"
          checked={timerSettings.mode === 'long'}
          onChange={handleModeChange}
          className="hidden"
        />
        <label
          htmlFor="long"
          className="cursor-pointer"
          style={{
            backgroundColor:
              timerSettings.mode === 'long'
                ? `${themeSettings.color}`
                : 'transparent',
          }}
        >
          long break
        </label>
      </form>
    </>
  );
};

export default ModeHeader;
