import { useState } from 'react';

const SettingsModal = ({
  timerSettings,
  setTimerSettings,
  themeSettings,
  setThemeSettings,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localSettings, setLocalSettings] = useState({
    pomo: timerSettings.lengths.pomo / 60,
    short: timerSettings.lengths.short / 60,
    long: timerSettings.lengths.long / 60,
    font: themeSettings.font,
    color: themeSettings.color,
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplySettings = (e) => {
    e.preventDefault();

    setTimerSettings((prev) => ({
      ...prev,
      lengths: {
        pomo: localSettings.pomo * 60,
        short: localSettings.short * 60,
        long: localSettings.long * 60,
      },
    }));

    setThemeSettings({
      font: localSettings.font,
      color: localSettings.color,
    });

    toggleModal();
  };

  return (
    // <>
    //   <button
    //     onClick={toggleModal}
    //     className="text-grey font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    //   >
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="size-6"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
    //       />
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    //       />
    //     </svg>
    //   </button>

    //   {isOpen && (
    //     <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50">
    //       <div className="relative p-4 w-full max-w-md max-h-full">
    //         <div className="relative bg-white rounded-lg shadow">
    //           <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
    //             <h3 className="text-lg font-semibold text-gray-900">
    //               Settings{' '}
    //             </h3>
    //             <button
    //               className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8"
    //               onClick={toggleModal}
    //             >
    //               <svg
    //                 className="w-8 h-3"
    //                 aria-hidden="true"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 14 14"
    //               >
    //                 <path
    //                   stroke="currentColor"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
    //                 />
    //               </svg>
    //               <span className="sr-only">Close modal</span>
    //             </button>
    //           </div>
    //           <form className="p-4 md:p-5" onSubmit={handleApplySettings}>
    //             <div className="grid gap-4 mb-4 grid-cols-2">
    //               <h3>Time (Minutes)</h3>
    //               <div action="" className="time-settings__form">
    //                 <label htmlFor="pomodoro">pomodoro</label>
    //                 <input
    //                   type="number"
    //                   name="pomo"
    //                   id="pomodoro"
    //                   min="1"
    //                   max="90"
    //                   defaultValue={localSettings.pomo}
    //                   onChange={handleChange}
    //                 />
    //                 <label htmlFor="short-break">short break</label>
    //                 <input
    //                   type="number"
    //                   name="short"
    //                   id="short-break"
    //                   min="1"
    //                   max="14"
    //                   defaultValue={localSettings.short}
    //                   onChange={handleChange}
    //                 />
    //                 <label htmlFor="long-break">long break</label>
    //                 <input
    //                   type="number"
    //                   name="long"
    //                   id="long-break"
    //                   min="15"
    //                   max="30"
    //                   defaultValue={localSettings.long}
    //                   onChange={handleChange}
    //                 />
    //               </div>
    //             </div>

    //             <div className="flex items-center mb-4">
    //               <h3>Font</h3>
    //               <div className="flex items-center space-x-4">
    //                 <label
    //                   className={`cursor-pointer p-2 border rounded-lg font-sans`}
    //                   style={{
    //                     fontFamily: 'Kumbh Sans, sans-serif',
    //                     background:
    //                       localSettings.font === 'Kumbh Sans, sans-serif'
    //                         ? '#3b82f6'
    //                         : '#f3f4f6',
    //                     color:
    //                       localSettings.font === 'Kumbh Sans, sans-serif'
    //                         ? 'white'
    //                         : 'black',
    //                   }}
    //                 >
    //                   <input
    //                     type="radio"
    //                     name="font"
    //                     value="Kumbh Sans, sans-serif"
    //                     checked={
    //                       localSettings.font === 'Kumbh Sans, sans-serif'
    //                     }
    //                     onChange={handleChange}
    //                     className="hidden"
    //                   />
    //                   Aa
    //                 </label>
    //                 <label
    //                   className={`cursor-pointer p-2 border rounded-lg font-serif`}
    //                   style={{
    //                     fontFamily: 'Roboto Slab, serif',
    //                     background:
    //                       localSettings.font === 'Roboto Slab, serif'
    //                         ? '#3b82f6'
    //                         : '#f3f4f6',
    //                     color:
    //                       localSettings.font === 'Roboto Slab, serif'
    //                         ? 'white'
    //                         : 'black',
    //                   }}
    //                 >
    //                   <input
    //                     type="radio"
    //                     name="font"
    //                     value="Roboto Slab, serif"
    //                     checked={localSettings.font === 'Roboto Slab, serif'}
    //                     onChange={handleChange}
    //                     className="hidden"
    //                   />
    //                   Aa
    //                 </label>
    //                 <label
    //                   className={`cursor-pointer p-2 border rounded-lg font-mono`}
    //                   style={{
    //                     fontFamily: 'Space Mono, monospace',
    //                     background:
    //                       localSettings.font === 'Space Mono, monospace'
    //                         ? '#3b82f6'
    //                         : '#f3f4f6',
    //                     color:
    //                       localSettings.font === 'Space Mono, monospace'
    //                         ? 'white'
    //                         : 'black',
    //                   }}
    //                 >
    //                   <input
    //                     type="radio"
    //                     name="font"
    //                     value="Space Mono, monospace"
    //                     checked={localSettings.font === 'Space Mono, monospace'}
    //                     onChange={handleChange}
    //                     className="hidden"
    //                   />
    //                   Aa
    //                 </label>
    //               </div>
    //             </div>

    //             <div className="flex items-center mb-4">
    //               <h3>Color</h3>
    //               <input
    //                 type="radio"
    //                 id="colorPref1"
    //                 name="color"
    //                 value="#F87070"
    //                 checked={localSettings.color === '#F87070'}
    //                 onChange={handleChange}
    //               />
    //               <label
    //                 htmlFor="colorPref1"
    //                 className="color-preference__red"
    //               ></label>

    //               <input
    //                 type="radio"
    //                 id="colorPref2"
    //                 name="color"
    //                 value="#70F3F8"
    //                 checked={localSettings.color === '#70F3F8'}
    //                 onChange={handleChange}
    //               />
    //               <label
    //                 htmlFor="colorPref2"
    //                 className="color-preference__blue"
    //               ></label>

    //               <input
    //                 type="radio"
    //                 id="colorPref3"
    //                 name="color"
    //                 value="#D881F8"
    //                 checked={localSettings.color === '#D881F8'}
    //                 onChange={handleChange}
    //               />
    //               <label
    //                 htmlFor="colorPref3"
    //                 className="color-preference__purple"
    //               ></label>
    //             </div>

    //             <button
    //               type="submit"
    //               className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    //             >
    //               Apply
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>
    <>
      <button
        onClick={toggleModal}
        className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900/50">
          <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg">
            <div className="flex items-center justify-between p-8 border-b">
              <h3 className="text-2xl font-bold text-gray-900">Settings</h3>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                onClick={toggleModal}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleApplySettings} className="p-8 space-y-8">
              <div className="space-y-6">
                <h4 className="text-xs font-bold tracking-[0.3em] text-gray-900">
                  Time (Minutes)
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs text-gray-400">
                      pomodoro
                    </label>
                    <input
                      type="number"
                      name="pomo"
                      // min="1"
                      // max="90"
                      className="w-full px-4 py-3 text-center text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={localSettings.pomo}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs text-gray-400">
                      short break
                    </label>
                    <input
                      type="number"
                      name="short"
                      // min="1"
                      // max="14"
                      className="w-full px-4 py-3 text-center text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={localSettings.short}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs text-gray-400">
                      long break
                    </label>
                    <input
                      type="number"
                      name="long"
                      // min="15"
                      // max="30"
                      className="w-full px-4 py-3 text-center text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={localSettings.long}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xs font-bold tracking-[0.3em] text-gray-900">
                  Font
                </h4>
                <div className="flex justify-center space-x-4">
                  {[
                    {
                      value: 'Kumbh Sans, sans-serif',
                      label: 'Aa',
                      className: 'font-sans',
                    },
                    {
                      value: 'Roboto Slab, serif',
                      label: 'Aa',
                      className: 'font-serif',
                    },
                    {
                      value: 'Space Mono, monospace',
                      label: 'Aa',
                      className: 'font-mono',
                    },
                  ].map((font) => (
                    <label
                      key={font.value}
                      className={`relative cursor-pointer`}
                    >
                      <input
                        type="radio"
                        name="font"
                        value={font.value}
                        checked={localSettings.font === font.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-16 h-16 flex items-center justify-center rounded-full text-lg
                          ${
                            localSettings.font === font.value
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-100 text-gray-600'
                          }
                          ${font.className} transition-colors duration-200`}
                      >
                        {font.label}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xs font-bold tracking-[0.3em] text-gray-900">
                  Color
                </h4>
                <div className="flex justify-center space-x-4">
                  {[
                    { value: '#F87070', bg: 'bg-[#F87070]' },
                    { value: '#70F3F8', bg: 'bg-[#70F3F8]' },
                    { value: '#D881F8', bg: 'bg-[#D881F8]' },
                  ].map((color) => (
                    <label
                      key={color.value}
                      className="relative cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="color"
                        value={color.value}
                        checked={localSettings.color === color.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-16 h-16 rounded-full ${color.bg} transition-transform duration-200 hover:scale-110`}
                      >
                        {localSettings.color === color.value && (
                          <svg
                            className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center">
                <button
                  type="submit"
                  className="px-10 py-4 bg-[#F87070] text-white rounded-full font-bold hover:opacity-90 transition-opacity duration-200 transform -translate-y-1/2"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsModal;
