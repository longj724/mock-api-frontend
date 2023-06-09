// External Dependencies
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Editor from '@monaco-editor/react';

// Relative Dependencies
import Header from 'components/Header';
import { BASE_URL, CREATE_SAMPLE_API } from 'utils/apiUrls';

function Landing() {
  const [template, setTemplate] = useState('');
  const [templateMode, setTemplateMode] = useState('json');
  const [apiResponse, setApiResponse] = useState('');
  const [apiURL, setApiURL] = useState('');

  const jsonEditorDefaultValue = {
    'Insert your JSON here': '',
  };

  const onChangetemplateEditor = (newValue: string | undefined, event) => {
    if (newValue) {
      console.log(newValue);
      setTemplate(newValue);
    }
  };

  const createAPI = async () => {
    if (template != '') {
      if (templateMode === 'json') {
        try {
          JSON.parse(template);

          const { data } = await axios.post(CREATE_SAMPLE_API, {
            template,
            type: templateMode,
          });

          setApiResponse(JSON.stringify(data.response));
          setApiURL(BASE_URL + data.template_id);
        } catch (e) {
          // Display a toast here
        }
      } else {
        // If TypeScript
      }
    }
  };

  return (
    <div className="h-screen w-screen">
      <div className="grid grid-rows-3 h-screen w-screen">
        <div className="">
          <Header />
        </div>
        <div className="row-span-2 px-20">
          <div className="grid grid-cols-9 h-full">
            <div className="col-span-4 flex flex-col justify-center">
              <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                  <li className="mr-2">
                    <a
                      href="#"
                      aria-current="page"
                      className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 cursor-pointer"
                    >
                      JSON
                    </a>
                  </li>
                  <li className="mr-2">
                    <a
                      href="#"
                      className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 cursor-pointer"
                    >
                      TypeScript
                    </a>
                  </li>
                </ul>
              </div>
              <div className="h-4/5 border-2 border-gray-200">
                <Editor
                  language={templateMode}
                  options={{
                    tabSize: 2,
                    fontSize: 16,
                    minimap: { enabled: false },
                  }}
                  defaultValue={JSON.stringify(jsonEditorDefaultValue)}
                  onMount={(editor) => {
                    editor.trigger('', 'editor.action.formatDocument', '');
                  }}
                  onChange={onChangetemplateEditor}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:px-2 md:px-6 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={createAPI}
                >
                  Create API
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-span-4 grid grid-rows-5">
              <div className="row-start-2 row-end-3">
                <p>API Url</p>
                <input
                  disabled={apiURL === ''}
                  value={apiURL}
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="row-span-2 border-2 border-gray-200">
                <Editor
                  language="json"
                  options={{
                    tabSize: 2,
                    fontSize: 16,
                    minimap: { enabled: false },
                    readOnly: apiResponse === '',
                  }}
                  value={apiResponse}
                  onMount={(editor) => {
                    editor.trigger('', 'editor.action.formatDocument', '');
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
